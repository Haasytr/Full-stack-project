"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const zod_1 = require("zod");
const make_create_user_use_case_1 = require("@/use-cases/factories/make-create-user-use-case");
const transform_csv_to_json_1 = require("@/utils/transform-csv-to-json");
async function FormatAndValidateCSV(csv) {
    const createUserSchema = zod_1.z.object({
        name: zod_1.z.string(),
        city: zod_1.z.string(),
        country: zod_1.z.string(),
        favorite_sport: zod_1.z.string(),
    });
    const createUserSchemaArray = zod_1.z.array(createUserSchema);
    const formattedCSV = await (0, transform_csv_to_json_1.transformCSVToJSON)(csv);
    return createUserSchemaArray.parse(formattedCSV);
}
async function create(req, reply) {
    try {
        const csv = await req.parts();
        const users = await FormatAndValidateCSV(csv);
        const createUsersUseCase = (0, make_create_user_use_case_1.makeCreateUserUseCase)();
        await createUsersUseCase.execute(users);
        return reply.status(200).send({
            message: 'The file was uplodead successfully.',
        });
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            return reply.status(500).send({
                message: 'Error while verifying file, please try again',
            });
        }
    }
}
exports.create = create;

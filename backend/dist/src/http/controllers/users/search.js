"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const zod_1 = require("zod");
const make_get_user_use_case_1 = require("@/use-cases/factories/make-get-user-use-case");
async function search(req, reply) {
    try {
        const getUserSchema = zod_1.z.object({
            q: zod_1.z.string(),
        });
        const { q } = getUserSchema.parse(req.query);
        const getUserUseCase = (0, make_get_user_use_case_1.makeGetUserUseCase)();
        const { users } = await getUserUseCase.execute({ q });
        return reply.status(200).send({
            data: users,
        });
    }
    catch (err) {
        return reply.status(500).send({
            message: err,
        });
    }
}
exports.search = search;

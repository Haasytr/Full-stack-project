import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { Dropzone } from '../../../../components/dropzone'
import { Button, Container, Title } from './styles'
import { api } from '../../../../lib/axios'

export function CreateUserForm() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  function handleFileUploaded(file: File) {
    setUploadedFile(file)
  }

  async function handleSubmitFile() {
    try {
      if (uploadedFile) {
        const formData = new FormData()
        formData.append('file', uploadedFile)

        const { data } = await api.post('/files', formData)

        toast.success(`${data.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })

        setUploadedFile(null)
      } else {
        toast.warning(`No file found!`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
    } catch (err) {
      toast.warning(`Error submitting the file`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  console.log(uploadedFile)

  return (
    <Container>
      <ToastContainer />
      <Title>Create Users</Title>
      <Dropzone onFileUploaded={handleFileUploaded} />
      {uploadedFile && (
        <div>
          <h2>Uploaded File:</h2>
          <p>Name: {uploadedFile.name}</p>
          <p>Size: {uploadedFile.size} bytes</p>
        </div>
      )}
      <Button onClick={handleSubmitFile} disabled={!uploadedFile}>
        Send
      </Button>
    </Container>
  )
}

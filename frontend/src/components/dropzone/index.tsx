import React, { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'
import { Container } from './styles'

interface FileDropzoneProps {
  onFileUploaded: (file: File) => void
}

export const Dropzone: React.FC<FileDropzoneProps> = ({ onFileUploaded }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0]
      onFileUploaded(uploadedFile)
    },
    [onFileUploaded],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      'text/html': ['.csv'],
    },
    onDrop,
  })

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag and drop a file here, or click to select a file</p>
        )}
      </div>
    </Container>
  )
}

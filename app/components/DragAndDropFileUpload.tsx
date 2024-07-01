'use client'
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropFileUpload: React.FC = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setFileContent(content);
      localStorage.setItem('uploadedFileContent', content);
    };
    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const getStoredFileContent = () => {
    const storedContent = localStorage.getItem('uploadedFileContent');
    if (storedContent) {
      setFileContent(storedContent);
    }
  };

  return (
    <div>
      <h1>Drag and Drop File Upload to Local Storage</h1>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #cccccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag 'n' drop a file here, or click to select one</p>
        )}
      </div>
      <button onClick={getStoredFileContent}>Load Stored File Content</button>
      {fileContent && (
        <div>
          <h2>File Content:</h2>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
};

export default DragAndDropFileUpload;

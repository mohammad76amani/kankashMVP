'use client';

import {
  MultiImageDropzone,
  type FileState,
} from './MultiImageDropzone';
import { useEdgeStore } from '../../../../lib/edgestore';
import { useState } from 'react';

export default function MultiImageDropzoneUsage() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string, url: string }[]>([]);
  const { edgestore } = useEdgeStore();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }



  async function handleSaveToMongoDB() {
    if (uploadedFiles.length === 0) {
      setErrorMessage('Please add at least one image before uploading.');
      setSuccessMessage(null);
      return;
    }

    try {
      const categorizedFiles = uploadedFiles.map(file => {
        const category = file.name.split('-')[0];
        const type = file.name.split('-')[1];
        return {
          name: file.name,
          url: file.url,
          type,
          category,
        };
      });

      const response = await fetch('/api/uploadedFiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: categorizedFiles }),
      });

      if (response.ok) {
        setSuccessMessage('Files uploaded successfully!');
        setErrorMessage(null);
      } else {
        throw new Error('Failed to upload files');
      }
    } catch (error) {
      setErrorMessage('Failed to upload files. Please try again.');
      setSuccessMessage(null);
    }
  }



  return (
    <div className='flex flex-col'>
      <MultiImageDropzone
        value={fileStates}
        dropzoneOptions={{
          maxFiles: 6,
        }}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.publicFiles.upload({
                  file: addedFileState.file as File,
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, 'COMPLETE');
                    }
                  },
                });

                setUploadedFiles(prev => [...prev, {
                  name: typeof addedFileState.file === 'object' ? addedFileState.file.name : '',
                  url: res.url
                }]);
              } catch (err) {
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
        }}
      />

      <ul >
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            <strong>Name:</strong> {file.name}, <strong>URL:</strong> {file.url}
          </li>
        ))}
      </ul>
      {successMessage && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}


      {/* Button to save the categorized files to MongoDB */}
      <button className='py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg items-center mx-auto' onClick={handleSaveToMongoDB}>آپلود</button>
    </div>
  );
}

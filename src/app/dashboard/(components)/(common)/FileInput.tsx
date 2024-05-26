// components/FileInput.tsx
import React, { useState } from 'react';

interface FileInputProps {
  onChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const [fileName, setFileName] = useState<string>('No file selected');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file selected');
    }
    onChange(file);
  };

  return (
    <div className="relative w-full">
      <input
        type="file"
        id="fileInput"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
        onChange={handleFileChange}
      />
      <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2">
        <span id="fileName" className="text-gray-500">
          {fileName}
        </span>
        <label
          htmlFor="fileInput"
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded cursor-pointer"
        >
          Browse
        </label>
      </div>
    </div>
  );
};

export default FileInput;

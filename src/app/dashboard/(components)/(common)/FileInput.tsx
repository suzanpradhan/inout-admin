// components/FileInput.tsx
import { FieldConfig, FieldInputProps } from 'formik';
import React from 'react';

interface FileInputProps {
  getFieldProps: (
    nameOrOptions: string | FieldConfig<any>
  ) => FieldInputProps<any>;
  name: string;
  value: File | null | undefined | string;
  id: string;
}

const FileInput: React.FC<FileInputProps> = ({
  getFieldProps,
  name,
  value,
  id,
}) => {
  console.log(typeof value);

  return (
    <div className="relative w-full">
      <input
        type="file"
        id={id}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
        {...getFieldProps(name)}
      />
      <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2">
        <span id="fileName" className="text-gray-500 font-normal text-sm">
          {typeof value === 'string' && value}
        </span>
        <label
          htmlFor={id}
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded cursor-pointer"
        >
          Browse
        </label>
      </div>
    </div>
  );
};

export default FileInput;

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FieldConfig, FieldInputProps } from 'formik';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  getFieldProps: (
    nameOrOptions: string | FieldConfig<any>
  ) => FieldInputProps<any>;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, getFieldProps, ...props }, ref) => {
    console.log(props.value);
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
        {...getFieldProps(props.name)}
        // value={props.value}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };

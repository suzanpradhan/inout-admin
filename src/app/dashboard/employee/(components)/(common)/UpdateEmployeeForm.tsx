'use client';

import { ZodError } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/core/redux/hooks';
import employeeApi from '@/modules/employee/employeeApi';
import {
  EmployeeDataType,
  EmployeeDetailType,
  employeeSchema,
} from '@/modules/employee/employeeTypes';
import { useFormik } from 'formik';
import { useState } from 'react';

export function UpdateEmployeeForm({ data }: { data: EmployeeDataType }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (values: EmployeeDetailType) => {
    try {
      employeeSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = async (formData: EmployeeDetailType) => {
    setIsLoading(true);
    try {
      await Promise.resolve(
        dispatch(employeeApi.endpoints.updateEmployee.initiate(formData))
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const formik = useFormik<EmployeeDetailType>({
    enableReinitialize: true,

    initialValues: {
      id: data.id,
      order: data.order,
      fullname: data.fullname ?? '',
      is_staff: data.is_staff,
      is_attend: data.is_attend ?? false,
    },
    validateOnChange: false,
    validate: validateForm,
    onSubmit,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="space-y-8"
    >
      <div>
        <label
          htmlFor="fullname"
          className="text-sm font-semibold text-slate-600 inline-block mb-2"
        >
          Employee Name
        </label>
        <Input
          placeholder="What is your employee name?"
          type="text"
          getFieldProps={formik.getFieldProps}
          name="fullname"
          id="fullname"
        />
        <span className="text-xs text-red-400 font-medium">
          {formik.errors.fullname}
        </span>
      </div>

      <div>
        <label
          htmlFor="order"
          className="text-sm font-semibold text-slate-600 inline-block mb-2"
        >
          Order no.
        </label>
        <Input
          placeholder="1"
          type="number"
          min={1}
          getFieldProps={formik.getFieldProps}
          name="order"
          id="order"
        />
        <span className="text-xs text-red-400 font-medium">
          {formik.errors.order}
        </span>
      </div>

      {/* <FormField
          control={form.control}
          name="positions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee Position</FormLabel>
              <FormControl>
                <SelectInput />
              </FormControl>
              <FormDescription>This field is optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
      <Button type="submit" variant="default" className="w-full h-12 uppercase">
        {isLoading ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          'Update Employee'
        )}
      </Button>
    </form>
  );
}

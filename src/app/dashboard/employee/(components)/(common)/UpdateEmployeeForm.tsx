'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SheetClose } from '@/components/ui/sheet';
import { useAppDispatch } from '@/core/redux/hooks';
import employeeApi from '@/modules/employee/employeeApi';
import {
  EmployeeDataType,
  EmployeeFormType,
  employeeSchema,
} from '@/modules/employee/employeeTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// const formSchema = z.object({
//   fullname: z.string().min(2, {
//     message: 'Fullname must be at least 2 characters.',
//   }),
//   position: z.string().optional(),
// });

export function UpdateEmployeeForm({ data }: { data: EmployeeDataType }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof employeeSchema>>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      order: data.order?.toString(),
      fullname: data.fullname,
      is_staff: true,
    },
  });

  const onSubmit = async (formData: EmployeeFormType) => {
    setIsLoading(true);
    if (data.id) {
      try {
        await Promise.resolve(
          dispatch(
            employeeApi.endpoints.updateEmployee.initiate({
              id: data.id,
              fullname: formData.fullname,
              order: formData.order,
            })
          )
        );
        SheetClose.call;
        setIsLoading(false);
        // formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = (formData: z.infer<typeof employeeSchema>) => {
    onSubmit(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is your employee name?"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is employee public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Number</FormLabel>
              <FormControl>
                <Input placeholder="1" type="number" min={1} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="position"
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
        <Button
          type="submit"
          variant="default"
          className="w-full h-12 uppercase bg-slate-600"
        >
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
    </Form>
  );
}

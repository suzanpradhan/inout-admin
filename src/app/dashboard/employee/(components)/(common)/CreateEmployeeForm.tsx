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
import { useAppDispatch } from '@/core/redux/hooks';
import employeeApi from '@/modules/employee/employeeApi';
import {
  EmployeeFormType,
  employeeSchema,
} from '@/modules/employee/employeeTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// const formSchema = z.object({
//   fullName: z.string().min(2, {
//     message: 'Fullname must be at least 4 characters.',
//   }),
//   position: z.string().optional(),
// });

export function CreateEmployeeForm() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof employeeSchema>>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      order: '',
      fullname: '',
      is_staff: true,
    },
  });

  const onSubmit = async (data: EmployeeFormType) => {
    setIsLoading(true);
    try {
      const responseData = await Promise.resolve(
        dispatch(
          employeeApi.endpoints.postEmployee.initiate({
            fullname: data.fullname,
          })
        )
      );
      setIsLoading(false);
      // formik.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (data: z.infer<typeof employeeSchema>) => {
    onSubmit(data);
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
              {/* <FormDescription>
                This is employee public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button
          type="submit"
          variant="default"
          className="w-full h-12 uppercase"
        >
          Create New Employee
        </Button>
      </form>
    </Form>
  );
}

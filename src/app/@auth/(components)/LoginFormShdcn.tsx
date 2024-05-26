'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { nonempty } from '@/core/utils/formUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export function LoginFormShdcn() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loginFormSchema = z.object({
    email: z.string().email().pipe(nonempty),
    password: z.string().pipe(nonempty),
  });

  type LoginRequestType = z.infer<typeof loginFormSchema>;

  const onSubmit = async (values: LoginRequestType) => {
    setIsLoading(true);
    const result = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })
      .then((response) => {
        if (response?.error) {
          toast.error('Login Failed! Please check your credentials.');
        } else {
          router.push('/dashboard');
        }
      })
      .catch((errorResponse) => {
        console.log('errorResponse');
        toast.error('Login Failed! Please check your credentials.');
      });
    setIsLoading(false);
  };

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="default"
          className="w-full h-12 uppercase"
        >
          Login
        </Button>
      </form>
    </Form>
  );
}

'use client';

import { ZodError, z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/core/redux/hooks';
import { nonempty } from '@/core/utils/formUtils';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const loginFormSchema = z.object({
  email: z.string().email().pipe(nonempty),
  password: z.string().pipe(nonempty),
});

type LoginRequestType = z.infer<typeof loginFormSchema>;

export function LoginFormShdcn() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateForm = (values: LoginRequestType) => {
    try {
      loginFormSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = async (data: LoginRequestType) => {
    setIsLoading(true);
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
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

  const formik = useFormik<LoginRequestType>({
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: '',
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
          htmlFor="email"
          className="text-sm font-semibold text-slate-600 inline-block mb-2"
        >
          Email
        </label>
        <Input
          placeholder="Your email address"
          type="email"
          getFieldProps={formik.getFieldProps}
          name="email"
          id="email"
        />
        <span className="text-xs text-red-400 font-medium">
          {formik.errors.email}
        </span>
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-sm font-semibold text-slate-600 inline-block mb-2"
        >
          Password
        </label>
        <Input
          placeholder="*****"
          type="password"
          min={1}
          getFieldProps={formik.getFieldProps}
          name="password"
          id="password"
        />
        <span className="text-xs text-red-400 font-medium">
          {formik.errors.password}
        </span>
      </div>

      <Button type="submit" variant="default" className="w-full h-12 uppercase">
        {isLoading ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          'Create New Employee'
        )}
      </Button>
    </form>
  );
}

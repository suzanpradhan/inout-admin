// 'use client';

// import { TextField } from '@/core/ui/zentheme/src';
// import Button from '@/core/ui/zentheme/src/components/Button';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import { z } from 'zod';
// import { toFormikValidate } from 'zod-formik-adapter';

// export default function LoginForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const loginFormSchema = z.object({
//     email: z.string(),
//     password: z.string(),
//   });

//   type LoginRequestType = z.infer<typeof loginFormSchema>;

//   const onSubmit = async (values: LoginRequestType) => {
//     setIsLoading(true);
//     const result = await signIn('credentials', {
//       email: values.email,
//       password: values.password,
//       redirect: false,
//     })
//       .then((response) => {
//         if (response?.error) {
//           toast.error('Login Failed! Please check your credentials.');
//         } else {
//           router.replace('/dashboard');
//         }
//       })
//       .catch((errorResponse) => {
//         toast.error('Login Failed! Please check your credentials.');
//       });
//     setIsLoading(false);
//   };

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validate: toFormikValidate(loginFormSchema),
//     onSubmit,
//   });

//   return (
//     <form
//       className="flex flex-col"
//       onSubmit={(e) => {
//         e.preventDefault();
//         formik.handleSubmit(e);
//       }}
//     >
//       <div className="font-bold text-xl self-center">Login to your account</div>
//       <div className="text-sm mb-8 self-center">
//         Sign in by entering the information below.
//       </div>
//       <TextField
//         placeholder="Your Email"
//         id="email"
//         type="text"
//         {...formik.getFieldProps('email')}
//       />
//       {!!formik.errors.email && (
//         <div className="text-red-500">{formik.errors.email}</div>
//       )}

//       <TextField
//         placeholder="•••••••••••"
//         id="password"
//         type="password"
//         className="mt-2"
//         {...formik.getFieldProps('password')}
//       />
//       {!!formik.errors.password && (
//         <div className="text-red-500">{formik.errors.password}</div>
//       )}
//       <Button
//         text="Login"
//         type="submit"
//         isLoading={isLoading}
//         className="mt-4 font-bold"
//       />
//       <Button
//         text="Don't have an account? Register"
//         type="button"
//         className="mt-4 font-bold w-fit h-fit bg-white self-center"
//         textClassName="text-gray-400"
//       />
//     </form>
//   );
// }

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
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FileInput from '../../(components)/(common)/FileInput';

const formSchema = z.object({
  site_name: z.string().min(2, {
    message: 'Site name must be at least 2 characters.',
  }),
  site_description: z.string().optional(),
  site_location: z.string().optional(),
  site_contact: z.string().optional(),
  site_logo: z.instanceof(File).optional(),
});

export function SettingsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      site_name: '',
      site_description: '',
      site_location: '',
      site_contact: '',
      site_logo: undefined,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="site_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is your site name?"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="site_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormDescription>This field is optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="site_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Location</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your current address"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>This field is optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="site_contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Contact</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your contact number"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>This field is optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="site_logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Logo</FormLabel>
              <FormControl>
                <FileInput {...field} />
              </FormControl>
              <FormDescription>This field is optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="default"
          className="w-full h-12 uppercase"
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
}

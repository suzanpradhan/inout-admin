'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import generalApi from '@/modules/settings/settingsApi';
import {
  settingSchema,
  SettingsDataType,
  SettingsDetailType,
} from '@/modules/settings/settingsTypes';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { ZodError } from 'zod';
import FileInput from '../../(components)/(common)/FileInput';

export function SettingsForm() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(generalApi.endpoints.getGeneral.initiate());
  }, [dispatch]);

  const general = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getGeneral`]?.data as SettingsDataType
  );

  const validateForm = (values: SettingsDetailType) => {
    try {
      settingSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = async (data: SettingsDetailType) => {
    setIsLoading(true);
    try {
      const responseData = await Promise.resolve(
        dispatch(generalApi.endpoints.updateGeneral.initiate(data))
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const formik = useFormik<SettingsDetailType>({
    enableReinitialize: true,

    initialValues: {
      id: general?.id,
      name: general?.name ?? '',
      avatar: undefined,
      is_data_updated: true,
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
          htmlFor="siteName"
          className="text-sm font-semibold text-slate-600 inline-block mb-2"
        >
          Site Name
        </label>
        <Input
          placeholder="What is your site name?"
          type="text"
          getFieldProps={formik.getFieldProps}
          name="name"
          id="siteName"
        />
        <span className="text-xs text-red-400 font-medium">
          {formik.errors.name}
        </span>
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-600 inline-block mb-2">
          Site Logo
        </label>
        <FileInput
          getFieldProps={formik.getFieldProps}
          name="avatar"
          value={formik.values.avatar}
          id="avatar"
        />
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
          'Save Changes'
        )}
      </Button>
    </form>
  );
}

// Upcoming fields * use letter
{
  /* <FormField
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
        /> */
}

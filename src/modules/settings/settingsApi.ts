import { apiPaths } from '@/core/api/apiConstants';
import { baseApi } from '@/core/api/apiQuery';
import { toast } from 'react-toastify';
import { SettingsDataType, SettingsDetailType } from './settingsTypes';

const generalApi = baseApi
    .enhanceEndpoints({ addTagTypes: ['GeneralSettings'] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getGeneral: builder.query<SettingsDataType, void>({
                query: () => `${apiPaths.generalUrl}`,
                providesTags: (result) => result ? [{ type: 'GeneralSettings', id: result.id?.toString() }] : [{ type: 'GeneralSettings', id: 'LIST' }],

                // providesTags: ['GeneralSettings'],
                serializeQueryArgs: ({ endpointName }) => {
                    return endpointName;
                },
                forceRefetch({ currentArg, previousArg }) {
                    return currentArg !== previousArg;
                },
                transformResponse: (response: any) => {
                    // console.log(response);
                    return response as SettingsDataType;
                },
            }),
            // postEmployee: builder.mutation<EmployeeDataType, EmployeeFormType>({
            //     query: ({ ...payload }) => {
            //         var formData = new FormData();
            //         formData.append('order', payload.order?.toString() ?? "");
            //         formData.append('fullname', payload.fullname ?? "");
            //         return {
            //             url: `${apiPaths.employeesUrl}/`,
            //             method: 'POST',
            //             body: formData,
            //             formData: true,
            //         };
            //     },
            //     invalidatesTags: [{ type: 'Employees', id: 'LIST' }],
            //     async onQueryStarted(payload, { queryFulfilled }) {
            //         try {
            //             await queryFulfilled;
            //             toast.success('Employee added.');
            //         } catch (err) {
            //             console.log(err);
            //             // toast.error();
            //             toast.error('Failed adding employee.');
            //         }
            //     },
            //     transformResponse: (response: any) => {
            //         // console.log(response);
            //         return response as any;
            //     },
            // }),
            updateGeneral: builder.mutation<SettingsDataType, SettingsDetailType>({
                query: ({ ...payload }) => {
                    const formData = new FormData();
                    if (payload.name) formData.append("name", payload.name);
                    // if (payload.avatar) formData.append("avatar", payload.avatar);
                    if (payload.is_data_updated) formData.append("is_data_updated", "true");
                    return {
                        url: `${apiPaths.generalUrl}/`,
                        method: 'PATCH',
                        body: formData,
                    }
                },
                async onQueryStarted(payload, { queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        toast.success('Employee updated.');
                    } catch (err) {
                        console.log(err);
                        // toast.error();
                        toast.error('Failed updating general setting.');
                    }
                },
                invalidatesTags: ['GeneralSettings'],
            }),
        }),
        overrideExisting: true,
    });

export default generalApi;
import { apiPaths } from '@/core/api/apiConstants';
import { baseApi } from '@/core/api/apiQuery';
import { toast } from 'react-toastify';
import { EmployeeDataType, EmployeeDeleteFormType, EmployeeFormType } from './employeeTypes';

const employeeApi = baseApi
    .enhanceEndpoints({ addTagTypes: ['Employees'] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getEmployees: builder.query<EmployeeDataType[], void>({
                query: () => `${apiPaths.employeesUrl}`,
                providesTags: (result) =>
                    result
                        ? [
                            ...result.map(({ id }) => ({ type: 'Employees', id } as const)),
                            { type: 'Employees', id: 'LIST' },
                        ]
                        : [{ type: 'Employees', id: 'LIST' }],
                serializeQueryArgs: ({ endpointName }) => {
                    return endpointName;
                },
                forceRefetch({ currentArg, previousArg }) {
                    return currentArg !== previousArg;
                },
                transformResponse: (response: any) => {
                    // console.log(response);
                    return response as EmployeeDataType[];
                },
            }),
            postEmployee: builder.mutation<EmployeeDataType, EmployeeFormType>({
                query: ({ ...payload }) => {
                    var formData = new FormData();
                    formData.append('order', payload.order?.toString() ?? "");
                    formData.append('fullname', payload.fullname ?? "");
                    return {
                        url: `${apiPaths.employeesUrl}/`,
                        method: 'POST',
                        body: formData,
                        formData: true,
                    };
                },
                invalidatesTags: [{ type: 'Employees', id: 'LIST' }],
                async onQueryStarted(payload, { queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        toast.success('Employee added.');
                    } catch (err) {
                        console.log(err);
                        // toast.error();
                        toast.error('Failed adding employee.');
                    }
                },
                transformResponse: (response: any) => {
                    // console.log(response);
                    return response as any;
                },
            }),
            updateEmployee: builder.mutation<EmployeeDataType, EmployeeFormType>({
                query: ({ ...payload }) => ({
                    url: `${apiPaths.employeesUrl}/${payload.id}/`,
                    method: 'PATCH',
                    body: payload,
                }),
                async onQueryStarted(payload, { queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        toast.success('Employee updated.');
                    } catch (err) {
                        console.log(err);
                        // toast.error();
                        toast.error('Failed updating employee.');
                    }
                },
                invalidatesTags: ['Employees'],
            }),
            deleteEmployee: builder.mutation<any, EmployeeDeleteFormType>({
                query: ({ ...payload }) => {
                    return {
                        url: `${apiPaths.employeesUrl}/${payload.id}`,
                        method: 'DELETE',
                    };
                },
                async onQueryStarted(payload, { queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        toast.success('Employee deleted.');
                    } catch (err) {
                        // toast.error();
                        toast.error('Failed deleting employee.');
                    }
                },
                invalidatesTags: (result, error, { id }) => [{ type: 'Employees', id }],
                transformResponse: (response) => {
                    // console.log(response);
                    return (response as any)?.data as EmployeeDeleteFormType;
                },
            }),
        }),
        overrideExisting: true,
    });

export default employeeApi;
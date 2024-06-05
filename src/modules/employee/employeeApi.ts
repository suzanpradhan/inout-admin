import { apiPaths } from '@/core/api/apiConstants';
import { baseApi } from '@/core/api/apiQuery';
import { PaginatedResponseType } from '@/core/types/responseTypes';
import { toast } from 'react-toastify';
import { EmployeeDataType, EmployeeDeleteFormType, EmployeeDetailType, EmployeeStatusType, OrderType } from './employeeTypes';

const employeeApi = baseApi
    .enhanceEndpoints({ addTagTypes: ['Employees'] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getEmployees: builder.query<PaginatedResponseType<EmployeeDataType>, number>({
                query: (arg) => `${apiPaths.employeesUrl}?page=${arg}`,
                providesTags: (response) =>
                    response
                        ? [
                            ...response.results.map(({ id }) => ({ type: 'Employees', id } as const)),
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
                    return response as PaginatedResponseType<EmployeeDataType>;
                },
            }),
            getAllEmployees: builder.query<EmployeeDataType[], void>({
                query: () => `${apiPaths.allEmployeesUrl}`,
                providesTags: (response) =>
                    response
                        ? [
                            ...response.map(({ id }) => ({ type: 'Employees', id } as const)),
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
            postEmployee: builder.mutation<EmployeeDataType, EmployeeDetailType>({
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
            updateEmployee: builder.mutation<EmployeeDataType, EmployeeDetailType>({
                query: ({ ...payload }) => ({
                    url: `${apiPaths.employeesUrl}/${payload.id}/refresh/`,
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
                invalidatesTags: (result, error, { id }) => [{ type: 'Employees', id }],
            }),
            updateStatus: builder.mutation<EmployeeDataType, EmployeeStatusType>({
                query: ({ ...payload }) => ({
                    url: `${apiPaths.employeesUrl}/${payload.id}/refresh/`,
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
                invalidatesTags: (result, error, { id }) => [{ type: 'Employees', id }],
            }),
            updateOrder: builder.mutation<EmployeeDataType, OrderType[]>({
                query: (payload) => ({
                    url: `${apiPaths.employeesUpdateOrderUrl}/`,
                    method: 'PATCH',
                    body: payload,
                }),
                async onQueryStarted(payload, { queryFulfilled }) {
                    console.log(payload)
                    try {
                        await queryFulfilled;
                        toast.success('Employee order updated.');
                    } catch (err) {
                        console.log(err);
                        // toast.error();
                        toast.error('Failed updating employee order.');
                    }
                },
                invalidatesTags: [{ type: 'Employees', id: 'LIST' }],
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
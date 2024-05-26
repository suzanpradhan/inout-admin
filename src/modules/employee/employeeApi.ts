import { apiPaths } from '@/core/api/apiConstants';
import { baseApi } from '@/core/api/apiQuery';
import { toast } from 'react-toastify';
import { EmployeeDataType, EmployeeFormType } from './employeeTypes';

const employeeApi = baseApi
    .enhanceEndpoints({ addTagTypes: ['Employees'] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getEmployees: builder.query<EmployeeDataType[], void>({
                query: () => `${apiPaths.getEmployeesUrl}`,
                serializeQueryArgs: ({ endpointName }) => {
                    return endpointName;
                },
                forceRefetch({ currentArg, previousArg }) {
                    return currentArg !== previousArg;
                },
                transformResponse: (response: any) => {
                    console.log(response);
                    return response as EmployeeDataType[];
                },
            }),
            postEmployee: builder.mutation<EmployeeDataType, EmployeeFormType>({
                query: ({ ...payload }) => {
                    var formData = new FormData();
                    formData.append('order', payload.order ?? "");
                    formData.append('fullname', payload.fullname ?? "");
                    return {
                        url: `${apiPaths.postEmployeeUrl}`,
                        method: 'POST',
                        body: formData,
                        formData: true,
                    };
                },
                // invalidatesTags: ['Employees'],
                async onQueryStarted(payload, { queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        toast.success('Employee added.');
                    } catch (err) {
                        // toast.error();
                        toast.error('Failed adding employee.');
                    }
                },
                transformResponse: (response: any) => {
                    console.log(response);
                    return response as any;
                },
            }),
        }),
        overrideExisting: true,
    });

export default employeeApi;
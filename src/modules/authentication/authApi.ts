import { apiPaths } from '@/core/api/apiConstants';
import { baseApi } from '@/core/api/apiQuery';
import { toast } from 'react-toastify';
import { RegisterRequestType, RegisterResponseType } from './authTypes';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Register APi
        register: builder.mutation<RegisterResponseType, RegisterRequestType>({
            query: (payload) => {
                const jsonData = {
                    email: payload.email,
                    profile: {
                        full_name: payload.name,
                        phone: payload.phone,
                    },
                    password: payload.password,
                };
                return {
                    url: `${apiPaths.registerUrl}`,
                    method: 'POST',
                    body: jsonData,
                };
            },
            async onQueryStarted(payload, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    toast.success('Register Successfully.');
                } catch (err) {
                    console.log(err);
                    toast.error('Server Error');
                }
            },
        }),
    }),
    overrideExisting: false,
});

export default authApi;
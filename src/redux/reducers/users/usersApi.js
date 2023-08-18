import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL, HTTP_METHOD} from '../../../api/http';
import {USER} from "../../../api/endpoints";



export const usersApi = createApi({
    reducerPath: 'meApi',
    tagTypes: [USER.ROOT],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    keepUnusedDataFor: 300,
        endpoints: (builder) => ({
            getUsersApi: builder.query({
                keepUnusedDataFor: 3600,
                query() {
                    return {
                        url: USER.ROOT,
                        method: HTTP_METHOD.GET,
                    };
                },
                providesTags: () => [{ type: USER.ROOT }],
                transformErrorResponse(response) {
                    return response;
                },
            }),
        }),
});

export const {
    useGetUsersApiQuery,
} = usersApi;

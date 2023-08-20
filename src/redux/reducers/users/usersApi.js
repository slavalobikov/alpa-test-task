import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL, HTTP_METHOD} from '../../../api/http';
import {USER} from "../../../api/endpoints";



export const usersApi = createApi({
    reducerPath: 'meApi',
    tagTypes: [USER.USER_TAG_TYPE],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    keepUnusedDataFor: 300,
        endpoints: (builder) => ({
            getUsersApi: builder.query({
                keepUnusedDataFor: 0,
                query() {
                    return {
                        url: USER.ROOT,
                        method: HTTP_METHOD.GET,
                    };
                },
                providesTags: () => [{ type: USER.USER_TAG_TYPE }],
                transformErrorResponse(response) {
                    return response;
                },
            }),
            getUserApi: builder.query({
                keepUnusedDataFor: 0,
                query(id) {
                    return {
                        url: USER.ONE_USER(id),
                        method: HTTP_METHOD.GET,
                    };
                },
                providesTags: (_, error, arg) => [{ type: USER.USER_TAG_TYPE, arg }],
                transformErrorResponse(response) {
                    return response;
                },
            }),
            putUserApi: builder.mutation({
            query(body) {
                return {
                    url: USER.ONE_USER(body?.id),
                    method: HTTP_METHOD.PUT,
                    body,
                };
            },
            invalidatesTags: (result, error, args) => {
                return [{ type: USER.USER_TAG_TYPE, args }, { type: USER.ROOT }];
            },
        }),
            deleteUserApi: builder.mutation({
                query(id) {
                    return {
                        url: USER.ONE_USER(id),
                        method: HTTP_METHOD.DELETE,
                    };
                },
            }),
            postUserApi: builder.mutation({
                query(arg) {
                    return {
                        url: USER.ROOT,
                        method: HTTP_METHOD.POST,
                        body:arg
                    };
                },
                invalidatesTags: (result, error, args) => {
                    return [{ type: USER.ROOT, args }, {type: USER.USER_TAG_TYPE}];
                },
            })


    }),
});

export const {
    useGetUsersApiQuery,
    useGetUserApiQuery,
    usePutUserApiMutation,
    useDeleteUserApiMutation,
    usePostUserApiMutation
} = usersApi;

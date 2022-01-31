import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const authenticationAPI = createApi({
    reducerPath: 'authenticationAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://acits-test-back.herokuapp.com/api/'}),
    endpoints: (build) =>  ({
        authenticationUser: build.mutation({
            query: (value) => ({
                url: `/login`,
                method: 'POST',
                body: {
                    login: value.login,
                    password: value.password
                }
            })
        })
    })
})
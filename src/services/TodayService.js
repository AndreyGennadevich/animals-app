import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const todayAPI = createApi({
    reducerPath: 'todayAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://acits-test-back.herokuapp.com/api/'}),
    endpoints: (build) =>  ({
        fetchToday: build.query({
            query: (token) => ({
                url: `/executions/today`,
                headers: {
                    authorization: 'Bearer ' + token
                },
            })
        })
    })
})
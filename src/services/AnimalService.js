import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const animalsAPI = createApi({
    reducerPath: 'animalsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://acits-test-back.herokuapp.com/api/'}),
    endpoints: (build) =>  ({
        fetchAnimals: build.query({
            query: ( props) => ({
                url: `/animals`,
                headers: {
                    authorization: 'Bearer ' + props.token
                },
                params: {
                    offset: props.offset,
                    limit: 5
                }
            })
        })
    })
})
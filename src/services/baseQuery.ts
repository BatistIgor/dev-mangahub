import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@/store/authSlice";
import { RootState } from "@/store/store";
import { API_REFRESH_PATH, BASE_URL } from "./configApi";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL, 
    credentials: "include",
    prepareHeaders: (headers, { getState, endpoint }) => {
        const token = (getState() as RootState).auth.token;
        const protectedEndpoints = ["getProfile", "updateProfile"];
        if (token && protectedEndpoints.includes(endpoint)) {
            headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
    }
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs, 
    unknown, 
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 403) {

        const refreshResult = await baseQuery(API_REFRESH_PATH, api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const accessToken = refreshResult.data.access;
            console.log(accessToken);
            api.dispatch(setCredentials({ accessToken }));

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

export default baseQueryWithReauth;

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
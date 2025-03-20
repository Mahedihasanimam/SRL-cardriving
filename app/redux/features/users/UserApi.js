import { api } from "../../baseApi"; // ✅ Ensure correct import

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),

    loginUser: builder.mutation({
        query: ({ email, password }) => ({
          url: `/?email=${email}&password=${password}`, // Send email and password as query params
          method: "POST",
        }),
        invalidatesTags: ["user"],
      }),
      
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
export default userApi; // ✅ Add default export

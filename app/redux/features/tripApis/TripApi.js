import { api } from "../../baseApi";

const TripApi = api.injectEndpoints({
  endpoints: (builder) => ({
    activityDropDownList: builder.query({
      query: ({ apikey }) => ({
        url: `/tripactivitydropdown.php?apikey=${apikey}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useActivityDropDownListQuery } = TripApi;
export default TripApi;

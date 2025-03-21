import { api } from "../../baseApi";

const TripApi = api.injectEndpoints({
  endpoints: (builder) => ({
    activityDropDownList: builder.query({
      query: ({ apikey }) => ({
        url: `/tripactivitydropdown.php?apikey=${apikey}`,
        method: "GET",
      }),
    }),
   Trucksandtailors: builder.query({
      query: ({ apikey }) => ({
        url: `/equipmentlist.php?apikey=${apikey}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useActivityDropDownListQuery, useTrucksandtailorsQuery } = TripApi;
export default TripApi;

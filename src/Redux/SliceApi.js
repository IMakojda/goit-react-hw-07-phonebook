import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626c26e45267c14d566dbdf9.mockapi.io/api',
  }),
  tagTypes: ['Contact',],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact']
    }),

    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: `POST`,
        body: newContact
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: `DELETE`,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactApi;


import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from './operations';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // contactsInitialState
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export const contactReducer = ContactsSlice.reducer;

//{
//   contacts: [],
//   filter: ""
// }
// reducers: {
//   addContact(state, action) {
//     state.items.push(action.payload);
//   },
//   deleteContact(state, action) {
//     state.items = state.items.filter(
//       contact => contact.id !== action.payload
//     );
//   },
// },

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

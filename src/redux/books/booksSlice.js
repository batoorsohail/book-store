/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/neTvlShlUagV28v2Fadm';

export const postBook = createAsyncThunk(
  'books/postBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(`${URL_API}/books`, bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data.message || 'Something went wrong. Please check later!',
      );
    }
  },
);

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${URL_API}/books`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data.message || 'Something went wrong. Please check later!',
      );
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL_API}/books/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data.message || 'Something went wrong. Please check later!',
      );
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, actions) => {
      const bookData = actions.payload;
      state.books.push(bookData);
    },
    removeBook: (state, actions) => {
      const idOfBookToRemove = actions.payload;
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((book) => book.item_id !== idOfBookToRemove);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postBook.pending, (state) => {
      state.isLoading = true;
    }).addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(postBook.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    }).addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      const responseObj = action.payload;

      const newBookArr = [];
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const id in responseObj) {
        const bookObj = responseObj[id][0];
        bookObj.item_id = id;
        newBookArr.push(bookObj);
      }
      state.books = newBookArr;
    }).addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loadingStatus from '../reduxConst';

// actions CONSTANTS
const ACTION_PREPEND = 'bookstore/categories';

const checkStatus = createAsyncThunk(
  `${ACTION_PREPEND}/CHECKSTATUS`,
  async () => {
    // WAIT -------------------------------------\/ millisecunds
    await new Promise((res) => { setTimeout(res, 750); });
    return 'Under construction';
  },
);

const categoriesSlice = createSlice({
  name: ACTION_PREPEND,
  initialState: {
    loadingStatus: loadingStatus.idle,
    status: 'please Check',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkStatus.pending, (state) => {
        if (state.loadingStatus === loadingStatus.idle) {
          state.status = 'REQUESTING';
        }
        state.loadingStatus = loadingStatus.pending;
      })
      .addCase(checkStatus.fulfilled, (state, action) => {
        state.loadingStatus = loadingStatus.succeeded;
        state.status = action.payload;
      });
  },
});

const { actions, reducer } = categoriesSlice;
export { actions, checkStatus };
export default reducer;

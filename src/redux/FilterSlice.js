const { createSlice } = require('@reduxjs/toolkit');

const filtersInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    getFilterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { getFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

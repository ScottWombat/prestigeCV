import { createSlice, createSelector,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit';

import { Template} from "./default-exports";

export const fetchTemplates = createAsyncThunk('tp/fetchTemplates', async () => {
        const response = await axios('/data/templates.json');
        return response.data
       
});

type TemplateState ={
    templates: [Template] | Template[]
}

const initialState = {
    templates: [],
    isLoading: false,
    error: null
}
export const templateSlice = createSlice({
    name: 'tp',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
      builder.addCase(fetchTemplates.pending, (state) => {
      state.isLoading = true;
      });

      builder.addCase(fetchTemplates.fulfilled,(state,action) => {
                state.templates = action.payload
      });

      builder.addCase(fetchTemplates.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    }
})

export const getTemplates = ( state ) => state.tp.templates;





export default templateSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import { studentsSlice } from './students';

export const store = configureStore({
    reducer: {
        students: studentsSlice.reducer
    }
})
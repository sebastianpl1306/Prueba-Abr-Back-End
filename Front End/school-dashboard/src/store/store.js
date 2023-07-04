import { configureStore } from '@reduxjs/toolkit';
import { studentsSlice,  } from './students';
import { subjectsSlice } from './subjects';

export const store = configureStore({
    reducer: {
        students: studentsSlice.reducer,
        subjects: subjectsSlice.reducer,
    }
})
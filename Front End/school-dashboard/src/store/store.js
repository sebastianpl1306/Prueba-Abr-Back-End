import { configureStore } from '@reduxjs/toolkit';
import { studentsSlice,  } from './students';
import { subjectsSlice } from './subjects';
import { teachersSlice } from './teachers';

export const store = configureStore({
    reducer: {
        students: studentsSlice.reducer,
        subjects: subjectsSlice.reducer,
        teacher: teachersSlice.reducer,
    }
})
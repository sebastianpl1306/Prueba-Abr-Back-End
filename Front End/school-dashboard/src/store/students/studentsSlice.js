import { createSlice } from '@reduxjs/toolkit';

export const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        students: []
    },
    reducers: {
        getStudents: (state, { payload }) => {
            state.students = payload;
        }
    }
});

export const { increment } = studentsSlice.actions;
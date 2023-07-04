import { createSlice } from '@reduxjs/toolkit';

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        isLoading: true
    },
    reducers: {
        startLoadTeachers: (state)=>{
            state.isLoading = true;
        },
        setTeachers: (state, { payload } ) => {
            state.teachers = payload;
            state.isLoading = false;
        },
    }
});

export const { setTeachers, startLoadTeachers } = teachersSlice.actions;
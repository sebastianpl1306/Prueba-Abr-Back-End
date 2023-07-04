import { createSlice } from '@reduxjs/toolkit';

export const subjectsSlice = createSlice({
    name: 'subjects',
    initialState: {
        subjects: [],
        isLoading: true
    },
    reducers: {
        loadSubjects: (state) =>{
            state.isLoading = true;
        },
        setSubjects: (state, { payload } ) => {
            state.subjects = payload;
            state.isLoading = false;
        },
    }
});

export const { setSubjects, loadSubjects } = subjectsSlice.actions;
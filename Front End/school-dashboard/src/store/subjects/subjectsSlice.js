import { createSlice } from '@reduxjs/toolkit';

export const subjectsSlice = createSlice({
    name: 'subjects',
    initialState: {
        subjects: [],
        isLoading: true,
        activeSubject: null
    },
    reducers: {
        loadSubjects: (state) =>{
            state.isLoading = true;
        },
        setSubjects: (state, { payload } ) => {
            state.subjects = payload;
            state.isLoading = false;
        },
        addSubject: (state, { payload })=>{
            state.subjects.push(payload);
        }
    }
});

export const { setSubjects, loadSubjects, addSubject, deleteSubject, updateSubject, setActiveSubject } = subjectsSlice.actions;
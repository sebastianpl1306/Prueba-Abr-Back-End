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
        },
        deleteSubject: (state, { payload })=>{
            state.subjects = state.subjects.filter(subject => subject.subjectId != payload);
        },
        updateSubject: (state, { payload })=>{
            state.subjects = state.subjects.map((subject) => subject.subjectId === payload.subjectId ? payload : subject);
        },
        setActiveSubject: (state, { payload }) => {
            state.activeSubject = payload;
        }
    }
});

export const { setSubjects, loadSubjects, addSubject, deleteSubject, updateSubject, setActiveSubject } = subjectsSlice.actions;
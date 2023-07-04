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
        addTeacher: (state, { payload })=>{
            state.teachers.push(payload);
        },
        updateTeacher: (state, { payload })=>{
            state.teachers = state.teachers.map((teacher) => teacher.teacherId === payload.teacherId ? payload : teacher);
        }
    }
});

export const { setTeachers, startLoadTeachers, addTeacher, updateTeacher } = teachersSlice.actions;
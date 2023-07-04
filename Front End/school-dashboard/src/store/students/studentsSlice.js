import { createSlice } from '@reduxjs/toolkit';

export const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        isLoading: true
    },
    reducers: {
        loadingStudents: (state) => {
            state.isLoading = true;
        },
        getStudents: (state, { payload }) => {
            state.students = payload;
            state.isLoading = false;
        },
        addStudent: (state, { payload })=>{
            state.students.push(payload);
        },
        deleteStudent: (state, { payload })=>{
            state.students = state.students.filter(student => student.studentId != payload);
        },
        updateStudent: (state, { payload })=>{
            state.students = state.students.map((student) => student.studentId === payload.studentId ? payload : student);
        },
    }
});

export const { getStudents, loadingStudents, addStudent, deleteStudent, updateStudent } = studentsSlice.actions;
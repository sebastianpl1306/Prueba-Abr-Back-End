import { createSlice } from '@reduxjs/toolkit';

export const reportSlice = createSlice({
    name: 'report',
    initialState: {
        report: [],
        iLoadingReport: true
    },
    reducers: {
        startLoadReport: (state) =>{
            state.iLoadingReport = true;
        },
        setReport: (state, { payload } ) => {
            state.report = payload;
            state.iLoadingReport = false;
        },
    }
});

export const { setReport, startLoadReport } = reportSlice.actions;
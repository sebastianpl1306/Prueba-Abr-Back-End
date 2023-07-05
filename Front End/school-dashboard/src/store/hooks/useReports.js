import { useDispatch, useSelector } from 'react-redux';
import { setReport, startLoadReport } from '../reports/reportSlice';
import schoolApi from '../../api/SchoolApi';

export const useReports = () => {
  const dispatch = useDispatch();
  const reportsState = useSelector(state => state.report);

  const startReportsState = async() =>{
    try {
      dispatch(startLoadReport());
      const { data } = await schoolApi.get('/report');
      if(!data.ok){
        throw new Error("[ERROR] Ocurrio algo inesperado");
      }
      dispatch(setReport(data.report));
    } catch (error) {
      throw new Error(error);
    }
  }

  return {
    ...reportsState,
    startReportsState
  }
}
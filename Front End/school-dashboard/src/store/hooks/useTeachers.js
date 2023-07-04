import { useDispatch, useSelector } from 'react-redux';
import { setTeachers, startLoadTeachers } from '../teachers';
import schoolApi from '../../api/SchoolApi';

export const useTeachers = () => {
  const dispatch = useDispatch();
  const studentsState = useSelector(state => state.teacher);

  const startGetTeachers = async() =>{
    try {
      dispatch(startLoadTeachers());
      const { data } = await schoolApi.get('/teacher');
      dispatch(setTeachers(data));
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  return {
    ...studentsState,
    startGetTeachers,
  }
}
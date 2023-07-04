import { useDispatch, useSelector } from 'react-redux';

import schoolApi from '../../api/SchoolApi';
import { loadSubjects, setSubjects } from '../subjects';
import Swal from 'sweetalert2';

export const useSubjects = () => {
  const dispatch = useDispatch();
  const studentsState = useSelector(state => state.subjects);

  const startGetSubjects = async() =>{
    try {
        dispatch(loadSubjects());
        const { data } = await schoolApi.get('/subject');
        dispatch(setSubjects(data));
    } catch (error) {
        console.error(error)
    }
  }

  return {
    ...studentsState,
    startGetSubjects
  }
}
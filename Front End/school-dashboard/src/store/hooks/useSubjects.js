import { useDispatch, useSelector } from 'react-redux';

import schoolApi from '../../api/SchoolApi';
import { addSubject, loadSubjects, setSubjects } from '../subjects';
import Swal from 'sweetalert2';

export const useSubjects = () => {
  const dispatch = useDispatch();
  const subjectsState = useSelector(state => state.subjects);

  const startGetSubjects = async() =>{
    try {
      dispatch(loadSubjects());
      const { data } = await schoolApi.get('/subject');
      dispatch(setSubjects(data));
    } catch (error) {
      throw new Error(error);
    }
  }

  const startCreateSubject = async(subject) =>{
    try {
      if(!subject || !subject.name || !subject.teacherId){
        throw new Error("[ERROR] Campos requeridos");
      }
      const { data } = await schoolApi.post('/subject', subject);
      if (!data.ok) {
        throw new Error("[ERROR] Ocurrio algo inesperado");
      }
      dispatch(addSubject(data.subject));
      Swal.fire('Tarea Creada Correctamente',`La materia se creo con exito`,'success');
    } catch (error) {
      throw new Error(error);
    }
  }

  return {
    ...subjectsState,
    startGetSubjects,
    startCreateSubject,
  }
}
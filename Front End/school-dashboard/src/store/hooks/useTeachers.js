import { useDispatch, useSelector } from 'react-redux';
import { addTeacher, setTeachers, startLoadTeachers, updateTeacher } from '../teachers';
import schoolApi from '../../api/SchoolApi';
import Swal from 'sweetalert2';

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

  const startCreateTeacher = async(teacher) =>{
    try {
      const { identification, name, lastName, age, address, phone } = teacher;
      if(!identification || !name || !lastName || !age || !address || !phone){
        throw new Error("[ERROR] Campos obligatorios");
      }
      const { data } = await schoolApi.post('/teacher', teacher);
      if(!data.ok || !data.teacher){
        throw new Error("[ERROR] No se pudo agregar el profesor");
      }
      dispatch(addTeacher(data.teacher));
      Swal.fire('Profesor Creado',`El profesor fue creado con exito`,'success');
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  const startUpdateTeacher = async(teacherUpdate)=>{
    try {
      const { data } = await schoolApi.put(`/teacher/${teacherUpdate.teacherId}`, teacherUpdate);
      if(!data.ok){
        throw new Error("[ERROR] No se pudo actualizar el profesor");
      }
      dispatch(updateTeacher(teacherUpdate));
      Swal.fire('Profesor Actualizado',`El profesor fue actualizado con exito`,'success');
    } catch (error) {
      console.log(error);
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  return {
    ...studentsState,
    startGetTeachers,
    startCreateTeacher,
    startUpdateTeacher,
  }
}
import { useDispatch, useSelector } from 'react-redux';
import schoolApi from '../../api/SchoolApi';
import { addStudent, deleteStudent, getStudents, loadingStudents, setActiveStudent, updateStudent } from '../students';
import Swal from 'sweetalert2';

export const useStudents = () => {
  const dispatch = useDispatch();
  const studentsState = useSelector(state => state.students);

  const startGetStudents = async() =>{
    try {
      dispatch(loadingStudents());
      const { data } = await schoolApi.get('/student');
      dispatch(getStudents(data));
    } catch (error) {
      console.error(error);
    }
  }

  const startCreateStudent = async(student) =>{
    try {
      const { identification, name, lastName, age, address, phone } = student;
      if(!identification || !name || !lastName || !age || !address || !phone){
        throw new Error("[ERROR] Campos obligatorios");
      }
      const { data } = await schoolApi.post('/student', student);
      if(!data.ok || !data.student){
        throw new Error("[ERROR] No se pudo agregar el estudiante");
      }
      dispatch(addStudent(data.student));
      Swal.fire('Estudiante Creado',`El estudiante fue creado con exito`,'success');
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  const startDeleteStudent = async(studentId)=>{
    try {
      const {data} = await schoolApi.delete(`/student/${studentId}`);
      if(!data.ok){
        throw new Error("[ERROR] No se pudo agregar el estudiante");
      }
      dispatch(deleteStudent(studentId));
      Swal.fire('Estudiante Eliminado',`El estudiante fue eliminado con exito`,'success');
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  const startUpdateStudent = async(studentUpdate)=>{
    try {
      const { data } = await schoolApi.put(`/student/${studentUpdate.studentId}`, studentUpdate);
      if(!data.ok){
        throw new Error("[ERROR] No se pudo actualizar el estudiante");
      }
      dispatch(updateStudent(studentUpdate));
      Swal.fire('Estudiante Actualizado',`El estudiante fue actualizado con exito`,'success');
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  const startActiveStudent = async(studentId)=>{
    try {
      const { data } = await schoolApi.get(`/student/${studentId}`);
      if(!data.ok){
        throw new Error("[ERROR] No se pudo obtener el estudiante");
      }
      dispatch(setActiveStudent(data.student));
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  const startAssignSubject = async(subject)=>{
    try {
      const { data } = await schoolApi.post('/student/assign', subject);
      if(!data.ok){
        throw new Error("[ERROR] No se pudo asignar la materia");
      }
      Swal.fire('Materia Asignada',`La materia fue asignada con exito`,'success');
    } catch (error) {
      throw new Error("[ERROR] Ocurrio Algo Inesperado");
    }
  }

  return {
    ...studentsState,
    startGetStudents,
    startCreateStudent,
    startDeleteStudent,
    startUpdateStudent,
    startActiveStudent,
    startAssignSubject,
  }
}
import { useEffect, useState } from 'react';
import { useTeachers } from '../store'
import { ModalUpdateTeacher } from './ModalUpdateTeacher';

export const TeacherTable = () => {
  const { teachers, startGetTeachers } = useTeachers();
  const [initialStateEdit, setInitialStateEdit] = useState({
    teacherId: "",
    identification: "",
    name: "",
    lastName: "",
    age: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    startGetTeachers();
  }, []);

  const handleEdit = (teacherEdit)=> {
    setInitialStateEdit({
      teacherId: teacherEdit.teacherId,
      identification: teacherEdit.identification,
      name: teacherEdit.name,
      lastName: teacherEdit.lastName,
      age: teacherEdit.age,
      address: teacherEdit.address,
      phone: teacherEdit.phone,
    });
    $('#modalUpdateTeacher').modal('show');
  }

  return (
    <>
      <table className="table">
        <thead>
            <tr>
            <th scope="col">Identificación</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Años</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
              teachers.map(teacher => (
                <tr key={teacher.teacherId}>
                  <td>{teacher.identification}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.age}</td>
                  <td>{teacher.address}</td>
                  <td>{teacher.phone}</td>
                  <td>
                    <button className="btn btn-success mx-2" onClick={() => handleEdit(teacher)}>Editar</button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
      <ModalUpdateTeacher initialState={initialStateEdit}/>
    </>
  )
}
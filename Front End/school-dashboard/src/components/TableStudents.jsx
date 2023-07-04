import { useState } from 'react';
import { useStudents } from '../store';
import Swal from 'sweetalert2';
import { ModalUpdateStudent } from './ModalUpdateStudent';

export const TableStudents = () => {
  const { students, startDeleteStudent } = useStudents();
  const [initialStateEdit, setInitialStateEdit] = useState({
    studentId: "",
    identification: "",
    name: "",
    lastName: "",
    age: "",
    address: "",
    phone: "",
  });

  const handleDelete = (studentId, subjects)=>{
    if(subjects.length > 0){
        Swal.fire('No se pudo eliminar',`El estudiante ya tiene materias asignadas`,'error');
        return;
    }
    startDeleteStudent(studentId);
  }

  const handleEdit = (studentEdit)=> {
    setInitialStateEdit({
        studentId: studentEdit.studentId,
        identification: studentEdit.identification,
        name: studentEdit.name,
        lastName: studentEdit.lastName,
        age: studentEdit.age,
        address: studentEdit.address,
        phone: studentEdit.phone,
    });
    $('#modalUpdateStudent').modal('show');
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
                  students.map(student => (
                      <tr key={student.studentId}>
                          <td><a href={`/estudiantes/${student.studentId}`}>{student.identification}</a></td>
                          <td>{student.name}</td>
                          <td>{student.lastName}</td>
                          <td>{student.age}</td>
                          <td>{student.address}</td>
                          <td>{student.phone}</td>
                          <td>
                              <button className="btn btn-success mx-2" onClick={() => handleEdit(student)}>Editar</button>
                              <button className="btn btn-danger mx-2" onClick={() => handleDelete(student.studentId, student.subjects)}>Eliminar</button>
                          </td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
      <ModalUpdateStudent initialState={initialStateEdit}/>
    </>
  )
}
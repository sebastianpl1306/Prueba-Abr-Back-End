import { useEffect } from "react";
import { useTeachers } from "../store"

export const TeacherTable = () => {
  const { teachers, startGetTeachers } = useTeachers();

  useEffect(() => {
    startGetTeachers();
  }, []);

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
                        <td><a href={`/estudiantes/${teacher.teacherId}`}>{teacher.identification}</a></td>
                        <td>{teacher.name}</td>
                        <td>{teacher.lastName}</td>
                        <td>{teacher.age}</td>
                        <td>{teacher.address}</td>
                        <td>{teacher.phone}</td>
                        <td>
                            {/* <button className="btn btn-success mx-2" onClick={() => handleEdit(student)}>Editar</button>
                            <button className="btn btn-danger mx-2" onClick={() => handleDelete(student.studentId, student.subjects)}>Eliminar</button> */}
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      {/* <ModalUpdateStudent initialState={initialStateEdit}/> */}
    </>
  )
}
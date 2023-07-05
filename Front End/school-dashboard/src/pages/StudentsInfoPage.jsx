import { useParams } from 'react-router-dom';
import { CustomeLayout } from '../layout';
import { useEffect } from 'react';
import { useStudents } from '../store';
import { ModalAssignSubject, TableSubjectsStudent } from '../components';

export const StudentsInfoPage = () => {
  const { id } = useParams();
  const { activeStudent, startActiveStudent } = useStudents();

  useEffect(() => {
    startActiveStudent(id);
  }, [id]);

  if(!activeStudent){
    return(
        <CustomeLayout>
        <div className="container">
          <div className="row">
            <h1>No se encontro el usuario</h1>
          </div>
        </div>
        </CustomeLayout>
    );
  }

  return (
    <CustomeLayout>
      <div className="container">
        <div className="row">
          <h1>{activeStudent.name} {activeStudent.lastName}</h1>
          <hr className=""/>
          <h4>Edad: <i>{activeStudent.age}</i></h4>
          <h4>Dirección: <i>{activeStudent.address}</i></h4>
          <h4>Teléfono: <i>{activeStudent.phone}</i></h4>
          <div className="text-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAssignSubject">Asignar Materia</button>
          </div>
          <TableSubjectsStudent subjects={activeStudent.subjects}/>
        </div>
        <ModalAssignSubject StudentId={id}/>
      </div>
    </CustomeLayout>
  )
}
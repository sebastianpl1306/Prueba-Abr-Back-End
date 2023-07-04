import { useEffect } from 'react';
import { ModalCreateStudent, TableStudents } from '../components';
import { CustomeLayout } from '../layout';
import { useStudents } from '../store';

export const StudentsPage = () => {
  const { startGetStudents } = useStudents();

  useEffect(() => {
    startGetStudents();
  }, []);

  return (
    <CustomeLayout>
      <div className="container">
        <div className="row">
          <h1>StudentsPage</h1>
          <hr/>
          <div className="col-12 my-1 text-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreateStudent">+ Agregar Estudiante</button>
          </div>
          <TableStudents/>
          <ModalCreateStudent/>
        </div>
      </div>
    </CustomeLayout>
  )
}
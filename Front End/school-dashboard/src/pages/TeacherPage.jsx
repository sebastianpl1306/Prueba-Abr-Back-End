import { useEffect } from 'react';
import { CustomeLayout } from '../layout';
import { useTeachers } from '../store';
import { ModalCreateTeacher, TeacherTable } from '../components';

export const TeacherPage = () => {
  const { startGetTeachers } = useTeachers();

  useEffect(() => {
    startGetTeachers();
  }, []);

  return (
    <CustomeLayout>
      <div className="container">
        <div className="row">
          <h1>Profesores</h1>
          <hr/>
          <div className="col-12 my-1 text-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreateTeacher">+Crear Profesor</button>
          </div>
          <TeacherTable/>
          <ModalCreateTeacher/>
        </div>
      </div>
    </CustomeLayout>
  )
}
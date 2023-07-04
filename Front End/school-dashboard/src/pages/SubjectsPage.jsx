import { TableSubjects } from '../components';
import { ModalCreateSubject } from '../components/ModalCreateSubject';
import { CustomeLayout } from '../layout';

export const SubjectsPage = () => {
  return (
    <CustomeLayout>
      <div className="container">
        <div className="row">
          <h1>Materias</h1>
          <hr/>
          <div className="col-12 my-1 text-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreateSubject">+ Agregar Materia</button>
          </div>
          <TableSubjects/>
        </div>
        <ModalCreateSubject/>
      </div>
    </CustomeLayout>
  )
}
import { useEffect } from 'react';
import { useForm } from '../hooks';
import { useTeachers } from '../store';

const initialState = {
  name: '',
  teacherId: '',
};

export const ModalCreateSubject = () => {
  const { name, teacherId, onInputChange, onResetForm } = useForm(initialState);
  const { teachers, startGetTeachers } = useTeachers();

  useEffect(() => {
    startGetTeachers();
  }, []);

  const submitForm = (event) =>{
    event.preventDefault();
    console.log({teacherId, name});
    // startCreateStudent(formState);
    onResetForm();
    $('#modalCreateSubject').modal('hide');
  }

  return (
    <div className="modal fade" id="modalCreateSubject" data-bs-backdrop="static" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Crear Materia</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label">Profesor</label>
                        <select className="form-select" name="teacherId" onChange={ onInputChange }>
                          <option>Elegir Profesor</option>
                          {
                            teachers.map(teacher => (
                              <option key={teacher.teacherId} value={ teacher.teacherId }>{teacher.name} {teacher.lastName}</option>
                            ))
                          }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Ingrese su nombre"
                            name="name"
                            value={ name }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Crear Materia</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
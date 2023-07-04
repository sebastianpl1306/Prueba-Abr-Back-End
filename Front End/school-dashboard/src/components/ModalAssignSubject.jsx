import { useEffect } from 'react';
import { useForm } from '../hooks';
import { useStudents, useSubjects } from '../store';
import Swal from 'sweetalert2';

const initialState = {
    SubjectId: '',
    AcademicYear: '',
    Grade: ''
};

export const ModalAssignSubject = ({ StudentId }) => {
  const { SubjectId, AcademicYear, Grade, onInputChange, onResetForm } = useForm(initialState);
  const { subjects, startGetSubjects } = useSubjects();
  const { startAssignSubject } = useStudents();

  useEffect(() => {
    startGetSubjects();
  }, []);

  const submitForm = (event) =>{
    event.preventDefault();
    if (!SubjectId || !AcademicYear || !Grade) {
        Swal.fire('Estudiante Creado',`Debe completar toda la información`,'info');
        return;
    }
    startAssignSubject({ StudentId, SubjectId, AcademicYear, Grade});
    $('#modalAssignSubject').modal('hide');
  }

  return (
    <div className="modal fade" id="modalAssignSubject" data-bs-backdrop="static" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Asignar Materia</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label className="form-label">Materia</label>
                            <select className="form-select" name="SubjectId" onChange={ onInputChange }>
                                <option>Elegir Materia</option>
                                {
                                    subjects.map(subject => (
                                        <option key={subject.subjectId} value={ subject.subjectId }>{subject.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Año</label>
                            <input 
                                type="number"
                                className="form-control"
                                id="AcademicYear"
                                placeholder="Ingrese el año"
                                name="AcademicYear"
                                value={ AcademicYear }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Calificación</label>
                            <input 
                                type="number"
                                className="form-control"
                                id="Grade"
                                placeholder="Ingrese la calificación"
                                name="Grade"
                                value={ Grade }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Asignar Materia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
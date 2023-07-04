import { useForm } from '../hooks';
import { useTeachers } from '../store';

const initialState = {
    identification: '',
    name: '',
    lastName: '',
    age: '',
    address: '',
    phone: ''
};

export const ModalCreateTeacher = () => {
  const { identification, name, lastName, age, address, phone, formState, onInputChange, onResetForm } = useForm(initialState);
  const { startCreateTeacher } = useTeachers();

  const submitForm = (event) =>{
    event.preventDefault();
    startCreateTeacher(formState);
    onResetForm();
    $('#modalCreateTeacher').modal('hide');
  }

  return (
    <div className="modal fade" id="modalCreateTeacher" data-bs-backdrop="static" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Crear Profesor</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label className="form-label">Identificación</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="identification" 
                                placeholder="Ingrese su identificación"
                                name="identification"
                                value={ identification }
                                onChange={ onInputChange }
                            />
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
                        <div className="mb-3">
                            <label className="form-label">Apellidos</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Ingrese sus apellidos"
                                name="lastName"
                                value={ lastName }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                placeholder="Ingrese su edad"
                                name="age"
                                value={ age }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Ingrese su dirección"
                                name="address"
                                value={ address }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Ingrese su teléfono"
                                name="phone"
                                value={ phone }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
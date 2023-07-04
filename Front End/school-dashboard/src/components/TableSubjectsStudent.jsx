export const TableSubjectsStudent = ({ subjects }) => {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Año</th>
                <th scope="col">Grado</th>
            </tr>
        </thead>
        <tbody>
            {
                subjects.map(suject => (
                    <tr key={`${suject.subjectId}${suject.academicYear}`}>
                        <td>{suject.subject.name}</td>
                        <td>{suject.academicYear}</td>
                        <td>{suject.grade}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
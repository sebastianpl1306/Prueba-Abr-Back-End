import { useEffect } from "react";
import { useReports } from "../store"

export const TableReport = () => {
  const { report, startReportsState } = useReports();

  useEffect(() => {
    startReportsState();
  }, [])
  
  return (
    <table className="table">
        <thead>
            <tr>
            <th scope="col">Año académico</th>
            <th scope="col">Identificación Alumno</th>
            <th scope="col">Nombre Alumno</th>
            <th scope="col">Código Materia</th>
            <th scope="col">Nombre Materia</th>
            <th scope="col">Identificación del profesor</th>
            <th scope="col">Nombre del profesor</th>
            <th scope="col">Calificación final</th>
            <th scope="col">Aprobó</th>
            </tr>
        </thead>
        <tbody>
            {
                report.map(reportItem => (
                    <tr key={`${reportItem.academicYear}${reportItem.codeSubject}${reportItem.studentIdentification}`}>
                        <td>{reportItem.academicYear}</td>
                        <td>{reportItem.studentIdentification}</td>
                        <td>{reportItem.studentName}</td>
                        <td>{reportItem.codeSubject}</td>
                        <td>{reportItem.subjectName}</td>
                        <td>{reportItem.teacherIdentification}</td>
                        <td>{reportItem.teacherName}</td>
                        <td>{reportItem.grade}</td>
                        <td>{reportItem.passed ? 'SI' : 'NO'}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
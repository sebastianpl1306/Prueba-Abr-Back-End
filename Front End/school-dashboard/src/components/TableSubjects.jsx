import { useEffect } from "react";
import { useSubjects } from "../store";

export const TableSubjects = () => {
  const { subjects, startGetSubjects } = useSubjects();

  useEffect(() => {
    startGetSubjects();
  }, [])

  return (
    <>
      <table className="table">
          <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
              </tr>
          </thead>
          <tbody>
              {
                  subjects.map(subject => (
                      <tr key={subject.subjectId}>
                        <td>{subject.subjectId}</td>
                        <td>{subject.name}</td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
    </>
  )
}
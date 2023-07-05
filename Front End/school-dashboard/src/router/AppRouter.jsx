import { Navigate, Route, Routes } from 'react-router-dom';
import { ReportsPage, StudentsInfoPage, StudentsPage, SubjectsPage, TeacherPage } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/estudiantes" element={<StudentsPage/>}/>
        <Route path="/estudiantes/:id" element={<StudentsInfoPage/>}/>
        <Route path="/profesores" element={<TeacherPage/>}/>
        <Route path="/materias" element={<SubjectsPage/>}/>
        <Route path="/reportes" element={<ReportsPage/>}/>
        <Route path="/*" element={<Navigate to='/estudiantes'/>}/>
      </Routes>
    </>
  )
}
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, ReportsPage, StudentsPage, SubjectsPage, TeacherPage } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/estudiantes" element={<StudentsPage/>}/>
        <Route path="/profesores" element={<TeacherPage/>}/>
        <Route path="/materias" element={<SubjectsPage/>}/>
        <Route path="/reportes" element={<ReportsPage/>}/>
        <Route path="/*" element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}
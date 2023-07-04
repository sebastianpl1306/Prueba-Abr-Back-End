import { useEffect } from 'react';
import { CustomeLayout } from '../layout';
import { useTeachers } from '../store';

export const TeacherPage = () => {
  const { startGetTeachers } = useTeachers();

  useEffect(() => {
    startGetTeachers();
  }, []);

  return (
    <CustomeLayout>
      <div className="container">
        <div className="row">
          <h1>TeacherPage</h1>
        </div>
      </div>
    </CustomeLayout>
  )
}
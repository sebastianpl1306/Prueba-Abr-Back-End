import { useParams } from 'react-router-dom';
import { CustomeLayout } from '../layout';

export const StudentsInfoPage = () => {
  const { id } = useParams();
  return (
    <CustomeLayout>
      <div className="container">
        <div className="row">
          <h1>StudentsInfoPage</h1>
          <hr className=""/>
          <p>{id}</p>
        </div>
      </div>
    </CustomeLayout>
  )
}
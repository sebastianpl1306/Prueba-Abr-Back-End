import { TableReport } from '../components';
import { CustomeLayout } from '../layout';

export const ReportsPage = () => {
  return (
    <CustomeLayout>
      <div className="container">
          <div className="row">
            <h1>Reporte</h1>
            <hr/>
            <TableReport/>
          </div>
      </div>
    </CustomeLayout>
  )
}
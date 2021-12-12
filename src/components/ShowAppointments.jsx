import React from 'react';
import { PageHeader } from 'antd';

function ShowAppointments() {
    return (
        <div className="show-appt">
           <div className="site-page-header-ghost-wrapper">
             <PageHeader
               title="Appointments"
               align="middle"
               display="flex"
             >
             </PageHeader>
           </div>
      </div>
    )
}

export default ShowAppointments;

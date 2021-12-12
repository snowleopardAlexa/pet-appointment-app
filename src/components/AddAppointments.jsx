import React, { useState } from 'react';
import { Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import EditAppointments from './EditAppointments';

function AddApointments() {

    const [ showForm, setShowForm ] = useState(false)
    const onClick = () => setShowForm(true);

    return (
        <div>
           <Card>
             <p style={{fontSize: '1.2rem'}}>Add Appointment</p>
             <PlusCircleFilled 
               style={{color: '#1890ff', fontSize: '30px'}} 
               onClick={onClick}
             />
            {showForm ? <EditAppointments /> : null}
           </Card>
        </div>
    )
}

export default AddApointments;
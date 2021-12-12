import React from 'react';
import { Card, Divider } from 'antd';

function ListAppointments({ petName, petType, petBreed }) {
    return (
        <div className="show-appt">
           <div className="site-page-header-ghost-wrapper">
           </div>
           <Divider orientation="left">Appointments</Divider>
           <Card className="pet-apt">
             <p style={{fontSize: '1.2rem', backgroundColor: 'pink'}}>Pet's Name {petName}</p>
             <p style={{fontSize: '1rem'}}>owner</p>
             <p style={{fontSize: '1rem'}}>date</p>
             <p style={{fontSize: '1rem'}}>email</p>
             <p style={{fontSize: '1rem'}}>number</p>
             {/*}
             <p style={{fontSize: '1rem'}}>date</p>
             <p style={{fontSize: '1rem'}}>owner</p>
             <p style={{fontSize: '1rem'}}>email</p>
             <p style={{fontSize: '1rem'}}>number</p>
             <p style={{fontSize: '1rem'}}>notes if present</p>*/}
           </Card>
      </div>
    )
}

export default ListAppointments;
import React from 'react';
import { Card, Divider } from 'antd';
import { useLocalStorage } from './useLocalStorage';

function ListAppointments() {
    return (
        <div className="list-appts">
           <Divider orientation="left">Appointments</Divider>
           <ul>
            {/*} {appts.map((appt) => (*/}
            <Card 
              className="pet-apt"
            >

            <li>
             <p 
        
               style={{fontSize: '1.2rem', backgroundColor: 'pink'}}>Pet's Name </p>
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
             </li>

           </Card>
            
          </ul>
      </div>
    )
}

export default ListAppointments;
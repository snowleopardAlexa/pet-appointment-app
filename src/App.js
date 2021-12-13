import React from 'react';
import './App.css';
import { Card, CardBody, CardTitle } from 'reactstrap';
import AddAppointments from './components/AddAppointments';
import ListAppointments from './components/ListAppointments';


function App() {
  return (
    <div className="pet-appt">
      <div>
      <Card className="hero mx-auto">
       <CardBody>
         <CardTitle tag="h4" className="text-center">
          Pet Appointment App
         </CardTitle>
       </CardBody>
      </Card>
      </div>
    <AddAppointments  />
    <ListAppointments />
    </div>
  );
}

export default App;

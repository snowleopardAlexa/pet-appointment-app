import React, { useEffect, useReducer } from 'react';
import './App.css';
import { Card, CardBody, CardTitle } from 'reactstrap';
// these two components share state, this is why we need to lift the state up to their parent component - App.js
import AddAppointments from './components/AddAppointments';
import ListAppointments from './components/ListAppointments';

// we created our own hook that manages the state of the appointments
// our appointments list can change and manage its own events using useEffect

// generate random ID for appointment
const generateId = () => Math.floor(Math.random()*1000);

// add appointments
const addAppointmentAction = (state, payload) => {
  return [...state, {...payload, id: generateId() }];
}

// edit appointments
const editAppointmentAction = (state, payload) => {
  // state.find(appointment => appointment.id === payload.id)
  // find appointment being edited by appointment id
  // remove the appointment being edited from the state
  // add a new appointment with the edited details back to the state
  // return the state with the edited appointment
  return state;
}

// remove appointments
const removeAppointmentAction = (state, payload) => {
  // find the appointment being deleted by appointment id
  // remove the appointment from the state
  // return the state without the removed appointment
  return state;
}

// appointments reducer
// this sets the state from custom hook useAppointments
const useAppointmentsReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return addAppointmentAction(state, action.payload);
    case 'edit':
       return editAppointmentAction(state, action.payload);
    case 'remove':
       return removeAppointmentAction(state, action.payload);     
  }
};

// our custom hook
const useAppointments = (initialAppointments) => {
  const [appointments, setAppointments] = useReducer(useAppointmentsReducer, initialAppointments);

  useEffect(() => {
    // call to database to save appointments
    console.log('saved appointments', appointments);
  }, [appointments]);

  return [appointments, setAppointments];
}

const initialAppointments = [];


function App() {
  const [appointments, setAppointments] = useAppointments(initialAppointments);

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
    <AddAppointments 
      setAppointments={setAppointments} 
    />
    {/* list appointments displays the list of appointments */}
    <ListAppointments 
       appointments={appointments} 
       
    />
    </div>
  );
}

export default App;

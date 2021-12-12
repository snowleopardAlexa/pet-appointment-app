import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import AddAppointments from './components/AddAppointments';
import ShowAppointments from './components/ShowAppointments';

function App() {

  return (
    <div className="pet-appt">
    <div className="site-card-border-less-wrapper">
    <Card bordered={false}>
    <p style={{fontSize: '1.5rem', textAlign: 'center'}}>Pet Appointment App</p>
    <AddAppointments />
    <ShowAppointments />
    </Card>
    </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import AddAppointments from './components/AddAppointments';

function App() {

  return (
    <div className="pet-appt">
    <div className="site-card-border-less-wrapper">
    <Card bordered={true}>
    <p style={{fontSize: '1.5rem', textAlign: 'center'}}>Add Appointment</p>
    <AddAppointments />
    </Card>
    </div>
    </div>
  );
}

export default App;

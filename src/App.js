import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons'
import AddAppointments from './components/AddAppointments';

function App() {
  return (
    <div className="pet-appt">
    <div className="site-card-border-less-wrapper">
    <Card title="Pet Appointment Scheduler">
    <Card>
      <p style={{fontSize: '1.2rem'}}>Add Appointment</p>
      <PlusCircleFilled style={{color: '#1890ff', fontSize: '30px'}} />
    </Card>
    </Card>
    </div>
    <AddAppointments />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPenFill } from 'react-icons/bs';

function ListAppointments() {

      // displaying data on the screen
      const [appts, setAppts] = useState([]);
      const [petName, setPetName] = useState([]);
      const [owner, setOwner] = useState([]);
      const [date, setDate] = useState([]);
      const [time, setTime] = useState([]);
      const [phoneNumber, setPhoneNumber] = useState([]);
      const [petType, setPetType] = useState([]);
      const [breed, setBreed] = useState([]);
      const [email, setEmail] = useState([]);
      const [gender, setGender] = useState([]);
      const [age, setAge] = useState([]);
      const [notes, setNotes] = useState([]);

    return (
      <div className="list-appts">
      <Card className="card-appt mx-auto">
        <CardBody>
           <CardTitle className="card-title-appt">Appointments</CardTitle>
        </CardBody>
      </Card>

      {appts.map((appt, id) => (

       <Card className="card-pet-appts mx-auto">
       <div className="icons">  
       <FaTrashAlt className="icon-trash" />
       <BsFillPenFill className="icon-edit" />
       </div>
       <CardBody>
        <Card className="card-pet-appt">
          <CardBody>
            <CardTitle tag="h4" className="card-title-pet-name">
               {appt.petName}
            </CardTitle>
            <CardSubtitle tag="h5">
               {appt.owner}
            </CardSubtitle>
            <CardText tag="h6">
               {appt.date}
            </CardText>
            <CardText tag="h6">
               {appt.time}
            </CardText>
            <CardText tag="h6">
               {appt.phoneNumber}
            </CardText>
            <CardText tag="h6">
               {appt.email}
            </CardText>
            <CardText tag="h6">
               {appt.petType}
            </CardText>
            <CardText tag="h6">
               {appt.breed}
            </CardText>
            <CardText tag="h6">
               {appt.gender}
            </CardText>
            <CardText tag="h6">
               {appt.age}
            </CardText>
            <CardText tag="h6">
               {appt.notes}
            </CardText>
          </CardBody>
        </Card>
        </CardBody>
        </Card>

        ))}

        </div>     
    )
}

export default ListAppointments;
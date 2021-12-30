import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPenFill } from 'react-icons/bs';

function ListAppointments({ appointments }) {

    return (
      <div className="list-appts">
      <Card className="card-appt mx-auto">
        <CardBody>
           <CardTitle className="card-title-appt">Appointments</CardTitle>
        </CardBody>
      </Card>

      {appointments.map(({ id, petName, owner, date, time, phoneNumber, email, petType, breed, gender, age, notes}) => (

       <Card key={id} className="card-pet-appts mx-auto">
       <div className="icons">  
       <FaTrashAlt className="icon-trash" />
       <BsFillPenFill className="icon-edit" />
       </div>
       <CardBody>
        <Card className="card-pet-appt">
          <CardBody>
            <CardTitle tag="h4" className="card-title-pet-name">
               {petName}
            </CardTitle>
            <CardSubtitle tag="h5">
               {owner}
            </CardSubtitle>
            <CardText tag="h6">
               {date}
            </CardText>
            <CardText tag="h6">
               {time}
            </CardText>
            <CardText tag="h6">
               {phoneNumber}
            </CardText>
            <CardText tag="h6">
               {email}
            </CardText>
            <CardText tag="h6">
               {petType}
            </CardText>
            <CardText tag="h6">
               {breed}
            </CardText>
            <CardText tag="h6">
               {gender}
            </CardText>
            <CardText tag="h6">
               {age}
            </CardText>
            <CardText tag="h6">
               {notes}
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
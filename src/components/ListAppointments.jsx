import React, {useState} from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPenFill } from 'react-icons/bs';

function ListAppointments() {

  const [ showApptDetails, setShowApptDetails ] = useState(false)

    return (
        <div className="list-appts">
           <Card className="card-appt mx-auto">
             <CardBody>
                <CardTitle className="card-title-appt">Appointments</CardTitle>
             </CardBody>
           </Card>
            <Card className="card-pet-appts mx-auto">
            <div className="icons">  
            <FaTrashAlt className="icon-trash" />
            <BsFillPenFill className="icon-edit" />
            </div>
            <CardBody>
             <Card className="card-pet-appt">
               <CardBody>
                 <CardTitle tag="h4" className="card-title-pet-name">
                    Kion
                 </CardTitle>
                 <CardSubtitle tag="h5">
                    Alexa Slomski
                 </CardSubtitle>
                 <CardText tag="h6">
                     20/02/2022
                 </CardText>
                 <CardText tag="h6">
                     12:30 am
                 </CardText>
                 <CardText tag="h6">
                     768-098-0987
                 </CardText>
                 <CardText tag="h6">
                     alexa@gmail.com
                 </CardText>
                 <CardText tag="h6">
                     Male
                 </CardText>
                 <CardText tag="h6">
                     1 yr
                 </CardText>
                 <CardText tag="h6">
                     He's a wild kitty, be careful!
                 </CardText>
               </CardBody>
             </Card>
             </CardBody>
             </Card>
             </div>
              
    )
}

export default ListAppointments;
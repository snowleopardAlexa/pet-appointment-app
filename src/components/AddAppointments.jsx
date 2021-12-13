import React, { useState } from 'react';
import {Input, Card, CardBody, FormGroup, Label, Button, Form } from 'reactstrap';
import { AiFillPlusCircle, AiFillCloseCircle,  } from 'react-icons/ai';

//import { useLocalStorage } from "./useLocalStorage";


function AddApointments() {
    // show form after clicking plus btn 
    const [ showForm, setShowForm ] = useState(false)
   

    // display alert that your appointment has been saved
    // const [save, setSave] = useState(false);

      const [petName, setPetName] = useState("")
      const [breed, setBreed] = useState("")

      // save data to LS
      const handleFillAppointmentForm = e => {
        e.preventDefault()
        try {
          window.localStorage.setItem("petName", JSON.stringify({ petName }))
          window.localStorage.setItem("breed", JSON.stringify({ breed }))
        } catch (error) {
          console.log(error)
        }
      }



    return (
        <div>
           <Card className="card-add-appt mx-auto">
             <p className="card-title-add-appt">Add Appointment
             <AiFillPlusCircle className="icon-add-appt" onClick={() => setShowForm(true)} />
             </p>
            {showForm ? 
            <Card>    
            <div className="icon-close">
             <AiFillCloseCircle 
                onClick={() => setShowForm(false)}
                className="icon-close-appt"
              />
              </div>
              <CardBody>
              <Form className="form-appt mx-auto">
               <FormGroup>
                 <Label>Pet Name</Label>
                 <Input
                  id="name"
                  type="text"
                 />
               </FormGroup>
  
               <FormGroup>
                <Label>Owner</Label>
                <Input
                  id="name"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label>Date</Label>
                <Input
                  id="name"
                  type="date"
                />
              </FormGroup>

              <FormGroup>
                <Label>Time</Label>
                <Input
                  id="name"
                  type="time"
                />
              </FormGroup>

              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  id="name"
                  type="number"
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  id="name"
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label>Gender</Label>
                <Input
                  id="name"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label>Age</Label>
                <Input
                  id="name"
                  type="number"
                />
              </FormGroup>

              <FormGroup>
                <Label>Notes</Label>
                <Input
                  id="name"
                  type="text"
                />
              </FormGroup>

             <Button className="btn-appt mx-auto d-block">Save Appointment</Button>
             </Form>
              </CardBody>       
            </Card>
               : null} 
           </Card> 
        </div>
    )
}

export default AddApointments;

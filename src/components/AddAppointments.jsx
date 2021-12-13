import React, { useState } from 'react';
import {Input, Card, CardBody, FormGroup, Label, Button, Form } from 'reactstrap';
import { AiFillPlusCircle, AiFillCloseCircle,  } from "react-icons/ai";
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
             <span>
             <AiFillPlusCircle className="icon-add-appt"
               onClick={() => setShowForm(true)}
             /></span>
             </p>
            {showForm ? 
            <Card style={{marginTop: '30px'}}>    
              <CardBody>
              <AiFillCloseCircle 
                onClick={() => setShowForm(false)}
                className="icon-close-appt"
              />
              <Form inline onSubmit={handleFillAppointmentForm}>
               <FormGroup>
                 <Label for="exampleEmail" hidden></Label>
                 <Input
                  id="name"
                  placeholder="Pet Name"
                  type="Name"
                  value={petName}
                  onChange={e => setPetName(e.target.value)}
                 />
               </FormGroup>
  
               <FormGroup>
                <Label for="examplePassword" hidden></Label>
                <Input
                 id="breed"
                 placeholder="breed"
                 type="breed"
                 value={breed}
                 onChange={e => setBreed(e.target.value)}
                />
              </FormGroup>
             <Button className="btn-appt">Save Appointment</Button>
             </Form>
              </CardBody>       
            </Card>
               : null} 
           </Card> 
        </div>
    )
}

export default AddApointments;

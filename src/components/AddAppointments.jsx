import React, { useState } from 'react';
import {Input, Card, FormGroup, Label, Button, Form } from 'reactstrap';

import { PlusCircleFilled } from '@ant-design/icons';
import { CloseCircleFilled } from '@ant-design/icons';

//import { useLocalStorage } from "./useLocalStorage";


function AddApointments() {

        
    // show form after clicking plus btn 
    const [ showForm, setShowForm ] = useState(false)
    const onClick = () => setShowForm(true);

    // display alert that your appointment has been saved
    // const [save, setSave] = useState(false);


      const [petName, setPetName] = useState("")
      const [breed, setBreed] = useState("")

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
           <Card>
             <p style={{fontSize: '1.2rem'}}>Add Appointment</p>
             <PlusCircleFilled 
               style={{color: '#1890ff', fontSize: '30px'}} 
               onClick={onClick}
             />
            {showForm ? 
                <Card style={{marginTop: '30px'}}>    
                <Card bordered={false}>
                <CloseCircleFilled style={{color: '#f5222d', fontSize: '25px', float: 'right'}}  />
                </Card>
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
             <Button>
              Submit
             </Button>
             </Form>

            </Card>
               : null} 
           </Card> 
        </div>
    )
}

export default AddApointments;

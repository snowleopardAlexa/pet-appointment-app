import React, { useState } from 'react';
import {Input, Card, CardBody, FormGroup, Label, Button, Form } from 'reactstrap';
import { AiFillPlusCircle, AiFillCloseCircle,  } from 'react-icons/ai';

function AddApointments() {
    // show form after clicking plus btn 
    const [ showForm, setShowForm ] = useState(false);

    const initialValues = {
        petName: "",
        owner: "",
        date: "",
        time: "",
        phoneNumber: "",
        email: "",
        gender: "",
        age: "",
        notes: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    };
   

    // display alert that your appointment has been saved
    // const [save, setSave] = useState(false);

  
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
                  name="petName"
                  value={formValues.petName}
                  onChange={handleChange}
                 />
               </FormGroup>
  
               <FormGroup>
                <Label>Owner</Label>
                <Input
                  id="name"
                  type="text"
                  name="owner"
                  value={formValues.owner}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Date</Label>
                <Input
                  id="name"
                  type="date"
                  name="date"
                  value={formValues.date}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Time</Label>
                <Input
                  id="name"
                  type="time"
                  name="time"
                  value={formValues.time}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  id="name"
                  type="number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  id="name"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Gender</Label>
                <Input
                  id="name"
                  type="text"
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Age</Label>
                <Input
                  id="name"
                  type="number"
                  name="age"
                  value={formValues.age}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Notes</Label>
                <Input
                  id="name"
                  type="text"
                  name="notes"
                  value={formValues.notes}
                  onChange={handleChange}
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

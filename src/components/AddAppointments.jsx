import React, { useEffect, useState } from 'react';
import {Input, Card, CardBody, FormGroup, Label, Button, Form, Alert } from 'reactstrap';
import { AiFillPlusCircle, AiFillCloseCircle,  } from 'react-icons/ai';
import { objectExpression } from '@babel/types';

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
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.petName) {
            errors.petName = "Pet Name is required";
        }
        if (!values.owner) {
            errors.owner = "Owner is required"
        }
      
        if (!values.date) {
            errors.date = "Date is required"
        }
      
        if (!values.time) {
            errors.time= "Time is required"
        }
      
        if (!values.phoneNumber) {
            errors.phoneNumber = "Phone Number is required"
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }

        return errors;
    }


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
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <p className="message-success">The appointment has been saved</p>
              ) : (

                  null
                  {/*<p className="message-failed">Try again. You have NOT saved the appointment.</p>*/}
              )}    

              <Form onSubmit={handleSubmit} className="form-appt mx-auto">
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
               <p className="alert-required">{formErrors.petName}</p>
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
              <p className="alert-required">{formErrors.owner}</p>
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
              <p className="alert-required">{formErrors.date}</p>
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
              <p className="alert-required">{formErrors.time}</p>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  id="name"
                  type="tel"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                />
              </FormGroup>
              <p className="alert-required">{formErrors.phoneNumber}</p>
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
              <p className="alert-required">{formErrors.email}</p>
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

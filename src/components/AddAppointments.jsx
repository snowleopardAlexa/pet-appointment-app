import React, { useEffect, useState } from "react";
import {
  Input,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Form,
} from "reactstrap";
import { AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
//import ListAppointments from "./ListAppointments";

const initialValues = {
  petName: "",
  owner: "",
  date: "",
  time: "",
  phoneNumber: "",
  petType: "",
  breed: "",
  email: "",
  gender: "",
  age: "",
  notes: "",
};

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.petName) {
    errors.petName = "Pet Name is required";
  }
  if (!values.owner) {
    errors.owner = "Owner is required";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (!values.time) {
    errors.time = "Time is required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }

  if (!values.petType) {
    errors.petType = "Pet Type is required";
  }

  return errors;
};

const useAddAppointmentForm = (setAppointments) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(formValues);
    setFormErrors(validation);
    
    // if the validation object has no properties, save the form
    // if we pass validation, save the form
    if (Object.keys(validation).length === 0) {
      setAppointments({ type: "add", payload: formValues });
      setIsSubmit(true);
    }
  };

  return {
    formValues,
    formErrors,
    isSubmit,
    handleChange,
    handleSubmit,
  };
};

const formProperties = [
  {
    label: "Pet Name",
    name: "petName",
    type: "text",
  },
  {
    label: "Owner",
    name: "owner",
    type: "text",
  },
  {
    label: "Date",
    name: "date",
    type: "date",
  },
  {
    label: "Time",
    name: "time",
    type: "time",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    type: "tel",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Pet Type",
    name: "petType",
    type: "text",
  },
  {
    label: "Breed",
    name: "breed",
    type: "text",
  },
  {
    label: "Gender",
    name: "gender",
    type: "text",
  },
  {
    label: "Age",
    name: "age",
    type: "number",
  },
  {
    label: "Notes",
    name: "notes",
    type: "text",
  }
];

function FormInput({
  label,
  name,
  type,
  handleChange,
  formErrors,
  formValues,
}) {
  return (
    <>
      <FormGroup>
        <Label>{label}</Label>
        <Input
          id="name"
          type={type}
          name={name}
          value={formValues[name]}
          onChange={handleChange}
        />
      </FormGroup>
      <p className="alert-required">{formErrors[name]}</p>
    </>
  );
}

function AddAppointmentForm({ setAppointments, formProps }) {
  // form validation
  const { formValues, formErrors, handleChange, handleSubmit, isSubmit } =
    useAddAppointmentForm(setAppointments);

  return (
    <>
      {isSubmit ? (
        <p className="message-success">The appointment has been saved</p>
      ) : <Form onSubmit={handleSubmit} className="form-appt mx-auto">
      {formProps.map((property) => (
        <FormInput
          key={property.name}
          {...property}
          handleChange={handleChange}
          formErrors={formErrors}
          formValues={formValues}
        />
      ))}
      <Button onClick={handleSubmit} className="btn-appt mx-auto d-block">
        {" "}
        Save Appointment
      </Button>
    </Form>}
    </>
  );
}

function AddAppointments({ setAppointments }) {
  // show form after clicking plus btn
  const [showForm, setShowForm] = useState(false);

  // display alert that your appointment has been saved
  // const [save, setSave] = useState(false);

  return (
    <div>
      <Card className="card-add-appt mx-auto">
        <p className="card-title-add-appt">
          Add Appointment
          <AiFillPlusCircle
            className="icon-add-appt"
            onClick={() => setShowForm(true)}
          />
        </p>
        {showForm ? (
          <Card>
            <div className="icon-close">
              <AiFillCloseCircle
                onClick={() => setShowForm(false)}
                className="icon-close-appt"
              />
            </div>
            <CardBody>
              <AddAppointmentForm
                setAppointments={setAppointments}
                formProps={formProperties}
              />
            </CardBody>
          </Card>
        ) : null}
      </Card>
      {/* <ListAppointments 
             petName={petName}
             owner={owner}
             setAppts
             appts
             
           /> */}
    </div>
  );
}

export default AddAppointments;

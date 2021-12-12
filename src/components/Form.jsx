import { Button, Card, FormGroup, InputGroup } from "@blueprintjs/core"
import { useState } from "react"

function Form() {
  const [petName, setPetName] = useState("")

  const handleFillAppointmentForm = e => {
    e.preventDefault()
    try {
      window.localStorage.setItem("petName", JSON.stringify({ petName }))
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div>
      <Card elevation="1">
        <form onSubmit={handleFillAppointmentForm}>
          <FormGroup label="Name" labelFor="name">
            <InputGroup
              id="Name"
              placeholder="Name"
              type="Name"
              value={petName}
              onChange={e => setPetName(e.target.value)}
            />
          </FormGroup>
          <Button intent="primary" text="Submit" fill type="submit" />
        </form>
      </Card>
    </div>
  )
}

export default Form;
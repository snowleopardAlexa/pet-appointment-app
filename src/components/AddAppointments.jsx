import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, InputNumber, Alert, Select, DatePicker } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { CloseCircleFilled } from '@ant-design/icons';

import { useLocalStorage } from "./useLocalStorage";

const { Option } = Select;

function AddApointments() {

    // state form field
    const [petName, setPetName] = useLocalStorage("petName", "");
    const [owner, setOwner] = useLocalStorage("owner", "");
    const [datePicker, setDatePicker] = useLocalStorage("datePicker", "");
    const [phoneNumber, setPhoneNumber] = useLocalStorage("phoneNumber", "");
    const [email, setEmail] = useLocalStorage("email", "");
    
    const [petType, setPetType] = useLocalStorage("petType", "");
    const [breed, setBreed] = useLocalStorage("breed", "");
    const [gender, setGender] = useLocalStorage("gender", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [notes, setNotes] = useLocalStorage("notes", "");

    
    // show form after clicking plus btn 
    const [ showForm, setShowForm ] = useState(false)
    const onClick = () => setShowForm(true);

    // display alert that your appointment has been saved
    const [save, setSave] = useState(false);

    // antd
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 8,
        },
      };

    

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
                 <Form 

                   //onSubmit={handleFillAppointmentForm}

                   {...layout} name="nest-messages" style={{marginTop: '10px'}}>
                  <Form.Item

                   onChange={(e) => setPetName(e.target.value)} 
                   value={petName}

                   name={['pet name']}
                   label="Pet's Name"
                   rules={[
                      {
                      required: true,
                      },
                   ]}
                  >
                 <Input />
                 </Form.Item>

                 <Form.Item
                 value={owner}
                 onChange={(e) => setOwner(e.target.value)}
                 name={['user', 'name']}
                 label="Owner"
                 rules={[
                  {
                    required: true
                  },
                 ]}
                >
                <Input />
                </Form.Item>

                 <Form.Item label="DatePicker">
                 <DatePicker 
                   value={datePicker}
                   onChange={(e) => setDatePicker(e.target.value)}
                   name={['date']}
                   rules={[
                    {
                      required: true
                    },
                  ]}
                 />
                </Form.Item>
        
                <Form.Item
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 name={['user', 'email']}
                 label="Email"
                 rules={[
                  {
                    type: 'email',
                    required: true
                  },
                ]}
                >
                <Input />
                </Form.Item>
        
                <Form.Item
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input
                  //addonBefore={prefixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>

                 <Form.Item
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  name={['pet type']}
                  label="Pet's Type"
                  rules={[
                    {
                    required: true
                    },
                  ]}
                >
                <Input />
               </Form.Item>

               <Form.Item
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                name={['breed']}
                label="Breed"
                rules={[
                  {
                    required: true
                  },
                ]}
                >
                <Input />
               </Form.Item>
        
               <Form.Item
                name={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender!',
                  },
                ]}
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
        
                <Form.Item
                 value={age}
                 onChange={(e) => setAge(e.target.value)}
                 name={['age']}
                 label="Age"
                 rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 99,
                    required: true
                  },
                 ]}
                >
                <InputNumber />
                </Form.Item>
        
                <Form.Item 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                name={['user', 'introduction']} label="Notes">
                <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="save">
                  Save
                </Button>
                {save &&  <Alert message="The appointment has been saved" type="success" />}
                </Form.Item>
            </Form>
            </Card>
               : null}
           </Card>
        </div>
    )
}

export default AddApointments;

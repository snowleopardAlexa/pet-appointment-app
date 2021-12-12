import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

function FormAddAppointments() {

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

    return (
        <div className="edit-appt">
         <Form {...layout} name="nest-messages">
          <Form.Item
           name={['user', 'name']}
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
          name={['user', 'email']}
          label="Pet's Type"
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
        name={['user', 'email']}
        label="Breed"
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
        name={['user', 'email']}
        label="Gender"
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
         name={['user', 'age']}
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
         name={['user', 'email']}
         label="Owner"
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
         name={['user', 'email']}
         label="Phone number"
         rules={[
          {
            type: 'email',
            required: true
          },
        ]}
        >
        <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Notes">
        <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
    </Form>
   </div>
   )
}

export default FormAddAppointments;
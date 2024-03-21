import React from 'react';
import { Form } from 'react-bootstrap';

const FormPreview = ({ formFields }) => {
  return (
    <Form>
      {formFields.map((field, index) => (
        <Form.Group key={index}>
          <Form.Label>{`Field ${index + 1}`}</Form.Label>
          <Form.Control
            as={field.type === 'textarea' ? 'textarea' : 'input'}
            type={field.type}
            placeholder={`Enter ${field.type} field`}
          />
        </Form.Group>
      ))}
    </Form>
  );
};

export default FormPreview;

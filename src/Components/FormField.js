import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormField = ({ index, field, removeField }) => {
  const handleChange = e => {
    // Update field type or properties if needed
  };

  return (
    <Form.Group key={index}>
      <Form.Label>Field {index + 1}</Form.Label>
      <Form.Control
        as={field.type === 'textarea' ? 'textarea' : 'input'}
        type={field.type}
        placeholder={`Enter ${field.type} field`}
        onChange={handleChange}
      />
      <Button onClick={() => removeField(index)}>Remove</Button>
    </Form.Group>
  );
};

export default FormField;

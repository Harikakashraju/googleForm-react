import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import FormField from './FormField';
import FormPreview from './FormPreview';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const addField = fieldType => {
    setFormFields([...formFields, { type: fieldType }]);
  };

  const removeField = index => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  return (
    <Container>
      <h2>Form Builder</h2>
      <div>
        <Button onClick={() => addField('text')}>Add Text Field</Button>{' '}
        <Button onClick={() => addField('textarea')}>Add Textarea Field</Button>{' '}
        <Button onClick={() => addField('email')}>Add Email Field</Button>
      </div>
      <hr />
      {formFields.map((field, index) => (
        <FormField
          key={index}
          index={index}
          field={field}
          removeField={removeField}
        />
      ))}
      <hr />
      <h3>Form Preview</h3>
      <FormPreview formFields={formFields} />
    </Container>
  );
};

export default FormBuilder;

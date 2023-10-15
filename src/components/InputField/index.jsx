import React from 'react';
import './InputField.css';

const InputField = (props) => {
  const { name, type, value, onChange, error } = props;
  return (
    <div className="field_wrapper">
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={name.toUpperCase()}
        className={`input_field ${error ? 'field_error' : ''}`}
      />
      {error && <span className="message_error">{error}</span>}
    </div>
  );
};

export default InputField;

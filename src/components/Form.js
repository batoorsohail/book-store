import React from 'react';
import '../styles/Form.css';

const Form = () => (
  <div className="form-container">
    <form className="form">
      <input type="text" placeholder="Title" required />
      <input type="text" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;

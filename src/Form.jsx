import React, { useState } from 'react';
import './form.css';

const MyForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <div className="myform">
        <h1 className="title">Add TODO</h1>
        <br />

        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="Title"
            className="input"
            value={inputs.username || ''}
            onChange={handleChange}
          />

          <br />
          <br />
          <label>Status:</label>
          <br />
          {/* <input
          type="number"
          name="Status"
          value={inputs.age || ''}
          onChange={handleChange}
        /> */}
          <select
            className="option"
            value={inputs.complete}
            onChange={handleChange}
          >
            <option value="incomplete">incomplete</option>
            <option value="Completed">Completed</option>
          </select>

          <br />
          <br />
          <br />

          <button className="btn">Submit</button>
          <button className="btn">Cancle</button>
        </form>
      </div>
    </>
  );
};

export default MyForm;

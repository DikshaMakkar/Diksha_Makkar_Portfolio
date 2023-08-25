import "../css/Form.css";

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can process the formData, e.g., send it to an API
    console.log(formData);
  };

  return (
    <div className="form">
      <form className="form1" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.label}
          onChange={handleInputChange}
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here!"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;

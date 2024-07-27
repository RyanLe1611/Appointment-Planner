import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="name">Name:</label>
        <input 
          type="text" 
          name="name" 
          id="name"
          placeholder="Type The Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input 
          type="text" 
          name="phone" 
          id="phone"
          placeholder="Type The Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input 
          type="text" 
          name="email" 
          id="email"
          placeholder="Type The Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="summit">Summit</button>
    </form>
  );
};


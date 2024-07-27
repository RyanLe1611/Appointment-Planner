import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContactName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="title">Title:</label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label for="contact">Choose Contact:</label>
        <ContactPicker contacts={contacts} setContactName={setContactName}/>
      </div>
      <div>
        <label for="date">Date:</label>
        <input 
          id="date" 
          type="date" 
          name="date" 
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label for="time">Time:</label>
        <input 
          id="time" 
          type="time" 
          name="time" 
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

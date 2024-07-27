import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contactName, setContactName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const appointment = {
      title: title,
      contact: contactName,
      date: date,
      time: time
    }

    props.onAdd(appointment);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={props.contacts} 
          handleSubmit={handleSubmit} 
          setContactName={setContactName}
          setDate={setDate}
          setTime={setTime}
          setTitle={setTitle}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointments} onRemove={props.onRemove} tag="appointment"/>
      </section>
    </div>
  );
};
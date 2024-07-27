import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact(newContact){
    if(contacts.some(contact => contact.name === newContact.name)){
      return;
    } else {
      if(newContact.name !== '') setContacts(prev => [...prev, newContact]);
    }
  }
  function removeContact(contactNeedToRemove){
    const newContacts = contacts.filter(contact => contact !== contactNeedToRemove);
    setContacts(newContacts);
  }
  function addAppointment(newAppt){
    if(appointments.some(appt => appt.title === newAppt.title)){
      return;
    } else {
      setAppointments(prev => [...prev, newAppt])
    }
  }
  function removeAppointment(apptNeedToRemove){
    const newAppointments = appointments.filter(appt => appt !== apptNeedToRemove);
    setAppointments(newAppointments);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} onAdd={addContact} onRemove={removeContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} onAdd={addAppointment} onRemove={removeAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

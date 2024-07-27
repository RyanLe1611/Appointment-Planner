import React, {useEffect} from "react";

export const ContactPicker = ({contacts, setContactName}) => {

  useEffect(() => {
    if (contacts.length > 0) {
      setContactName(contacts[0].name);
    }
  }, [contacts, setContactName]);

  return (
    <select id="contact" onChange={(e) => setContactName(e.target.value)}>
      {contacts.map(contact => <option>{contact.name}</option>)}
    </select>
  );
};

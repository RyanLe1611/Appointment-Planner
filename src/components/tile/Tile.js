import React from "react";

export const Tile = (props) => {
  function handleClick(){
    props.onRemove(props.contact)
  }
  if(props.tag === "contact") return (
    <div className="tile-container">
      <p>{props.contact.name}</p>
      <p>{props.contact.phone}</p>
      <p>{props.contact.email}</p>
      <button onClick={handleClick}>-</button>
    </div>
  );
  else return (
    <div className="tile-container">
      <p>{props.contact.title}</p>
      <p>{props.contact.contact}</p>
      <p>{props.contact.date}</p>
      <p>{props.contact.time}</p>
      <button onClick={handleClick}>-</button>
    </div>
  )
};

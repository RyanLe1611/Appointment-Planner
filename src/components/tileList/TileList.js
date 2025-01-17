import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.list.map((contact) => <Tile contact={contact} onRemove={props.onRemove} tag={props.tag}/>)}
    </div>
  );
};

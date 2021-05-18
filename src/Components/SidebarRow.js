import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}></Avatar>}
      {Icon && <Icon></Icon>}
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;

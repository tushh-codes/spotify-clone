import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className='sidebarOptions'>
      {Icon && <Icon className='sidebarOptions_icons' />}
      {Icon ? <h5>{title}</h5> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;

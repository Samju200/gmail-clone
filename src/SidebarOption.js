import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title, number, selected, click }) {
  return (
    <div
      className={`sidebaroption  ${selected && 'sidebaroption-active'}`}
      onClick={click}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;

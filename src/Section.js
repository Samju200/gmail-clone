import React from 'react';
import './Section.css';
function Section({ Icon, color, title, selected }) {
  return (
    <div
      className={`section ${selected && 'section-selected'}`}
      style={{
        borderBottom: `2px solid ${color} `,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default Section;

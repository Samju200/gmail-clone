import { IconButton } from '@material-ui/core';
import {
  Add,
  AssignmentTurnedInRounded,
  DateRangeRounded,
  PermContactCalendarRounded,
  PersonPin,
  Remove,
} from '@material-ui/icons';
import React from 'react';
import './EmailIcon.css';
function EmailIcon() {
  return (
    <div className="email_icon">
      <IconButton>
        <DateRangeRounded />
      </IconButton>
      <IconButton>
        <PersonPin />
      </IconButton>
      <IconButton>
        <AssignmentTurnedInRounded />
      </IconButton>
      <IconButton>
        <PermContactCalendarRounded />
      </IconButton>
      <IconButton>
        {' '}
        <Remove />
      </IconButton>
      <IconButton>
        <Add />
      </IconButton>
    </div>
  );
}

export default EmailIcon;

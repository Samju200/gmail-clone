import { Checkbox, IconButton } from '@material-ui/core';
import { StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './EmailRow.css';
import { selectMail } from './features/mailSlice';

function EmailRow({ title, subject, description, time, id }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ title, subject, description, time, id }));
    history.push('/mail');
  };
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow_option">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow_titte">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject}
          {''}-<span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;

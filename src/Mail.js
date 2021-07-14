import { Avatar, IconButton } from '@material-ui/core';
import {
  ArrowBack,
  ArrowDropDown,
  AssignmentReturned,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Delete,
  Email,
  Error,
  Keyboard,
  LabelImportant,
  Launch,
  MoreVert,
  MoveToInbox,
  Print,
  Reply,
  StarOutlined,
  WatchLater,
} from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import './Mail.css';
function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsleft">
          <ArrowBack onClick={() => history.push('/')} />
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <AssignmentReturned />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email_toolsright">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <Keyboard />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_header">
          <h2>{selectedMail?.subject}</h2>
          <div className="mail_header_icon">
            <Print />
            <Launch />
          </div>
        </div>
        <div className="mail_title">
          <div className="mail_titleleft">
            <Avatar />
            <p> {selectedMail?.title}</p>
          </div>
          <div className="mail_titleright">
            {' '}
            <p>{selectedMail?.time}</p>
            <IconButton>
              <StarOutlined />
            </IconButton>
            <IconButton>
              <Reply />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="mail_meassage">
          <article>{selectedMail?.description}</article>
        </div>
      </div>
    </div>
  );
}

export default Mail;

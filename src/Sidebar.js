import { Avatar, Button } from '@material-ui/core';
import {
  AccessTime,
  Add,
  ExpandMore,
  Inbox,
  Keyboard,
  LabelImportant,
  Note,
  Send,
  Star,
  Videocam,
} from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openSendMessage } from './features/mailSlice';
import { selectUser } from './features/userSlice ';
import './Sidebar.css';

import SidebarOption from './SidebarOption';

function Sidebar() {
  // const [select, useSelect] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        compose
      </Button>
      <div className="sidebar_top">
        <SidebarOption
          Icon={Inbox}
          title="inbox"
          number={45}
          selected={true}
          click={() => history.push('/')}
        />
        <SidebarOption Icon={Star} title="starred" />
        <SidebarOption Icon={AccessTime} title="Snoozed" />
        <SidebarOption Icon={Send} title="sent" />
        <SidebarOption Icon={Note} title="drafts" number={45} />
        <SidebarOption Icon={LabelImportant} title="Important" />
        <SidebarOption Icon={ExpandMore} title="More" />
      </div>

      <div className="sidebar_middle">
        <h2>Meet</h2>
        <SidebarOption Icon={Videocam} title="New meeting" />
        <SidebarOption Icon={Keyboard} title="Join a meeting" />
      </div>
      <div className="sidebar_bottom">
        <h2>Hangouts</h2>
        <SidebarOption Icon={Avatar} title={user?.displayName} />
      </div>
    </div>
  );
}

export default Sidebar;

import { Checkbox, IconButton } from '@material-ui/core';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Keyboard,
  LocalOffer,
  MoreVert,
  People,
  Refresh,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import { db } from './firebase';
import Section from './Section';

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  return (
    <div className="emaillist">
      <div className="emaillist_setting">
        <div className="emaillist_setting_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_setting_right">
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
      <div className="emaillist_section">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotion" color="green" />
      </div>
      <div className="emaillist_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Samju"
          subject="God is Good"
          description="when we are yet sinner christ die for us. he love us before we love him"
          time="10am"
        />
        <EmailRow
          title="Samju"
          subject="God is Good"
          description="when we are yet sinner christ die for us. he love us before we love him"
          time="10am"
        />
        <EmailRow
          title="Samju"
          subject="God is Good"
          description="when we are yet sinner christ die for us. he love us before we love him"
          time="10am"
        />
      </div>
    </div>
  );
}

export default EmailList;

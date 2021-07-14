import { Button } from '@material-ui/core';
import {
  Close,
  Delete,
  MoreVert,
  Remove,
  ZoomOutMap,
} from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (sendMail) => {
    console.log(sendMail);
    db.collection('emails').add({
      to: sendMail.to,
      subject: sendMail.subject,
      message: sendMail.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendmail">
      <div className="sendmail_header">
        <h2>New message</h2>
        <div className="sendmail_closed">
          <Remove />
          <ZoomOutMap />
          <Close onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendmail_error">This field is required</p>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className="sendmail_error">This field is required</p>
        )}
        <textarea name="message" {...register('message', { required: true })} />
        {errors.message && (
          <p className="sendmail_error">This field is required</p>
        )}

        <div className="sendmail_option">
          <Button
            className="sendmail_send"
            variant="container"
            color="primary"
            type="submit"
          >
            Send
          </Button>
          <div className="sendmail_option_icon">
            {' '}
            <MoreVert />
            <Delete />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

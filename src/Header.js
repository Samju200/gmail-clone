import { Avatar, IconButton } from '@material-ui/core';
import {
  AppsRounded,
  ArrowDropDown,
  HelpOutline,
  Menu,
  Search,
  Settings,
} from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice ';
import { auth } from './firebase';
import './Header.css';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown />
      </div>
      <div className="header_right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <AppsRounded />
        </IconButton>
        <Avatar scr={user.photoUrl} onClick={signout} />
      </div>
    </div>
  );
}

export default Header;

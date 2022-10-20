import React from 'react';
import './TopBar.css';
import {NavLink} from 'react-router-dom';

//React components return jsx kind of markup
function TopBar() {
  return (
    <div className='topbar'>
    <div className='topbar-left'>
      <i className="topbar-social-icon fa-brands fa-instagram"></i>
      <i className="topbar-social-icon fa-brands fa-facebook"></i>
      <i className="topbar-social-icon fa-brands fa-linkedin"></i>
      <i className="topbar-social-icon fa-brands fa-twitter"></i>
      </div>
    <div className='topbar-center'>
      <ul className='topbar-list'>
        <li className='topbar-list-item'>
          <NavLink to='/'>HOME</NavLink></li>
        <li className='topbar-list-item'>ABOUT</li>
        <li className='topbar-list-item'>CONTACT</li>
        <li className='topbar-list-item'><NavLink to='/create'>CREATE LISTING</NavLink></li>
        <li className='topbar-list-item'>LOGOUT</li>
      </ul>
    </div>
    <div className='topbar-right'>
      <img className='topbar-profile-pic' alt='img' src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'/><i className="topbar-search fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}

export default TopBar

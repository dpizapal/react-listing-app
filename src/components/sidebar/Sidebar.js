import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar-section'>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'>about me</span>
        <img className='sidebar-img' alt='img' src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIweWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sit amet felis vel rhoncus. Suspendisse nisi lectus, dignissim eget eros eget, faucibus pretium lorem.
        </p>
      </div>
      <div className='sidebar-subsection'>
      <span className='sidebar-title'>categories</span>
      <ul className='sidebar-categories'>
        <li className='sidebar-category'>Buy</li>
        <li className='sidebar-category'>Sell</li>
        <li className='sidebar-category'>Rent</li>
        <li className='sidebar-category'>Hostel</li>
        <li className='sidebar-category'>B & B</li>
        <li className='sidebar-category'>Hotel</li>
      </ul>
      </div>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'>follow us</span>
        <div className='sidebar-social-icons'>
          <i className="sidebar-social-icon fa-brands fa-instagram"></i>
          <i className="sidebar-social-icon fa-brands fa-facebook"></i>
          <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
          <i className="sidebar-social-icon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

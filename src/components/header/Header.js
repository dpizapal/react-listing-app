import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header-section'>
      <div className='hero-text'>
        <span className='hero-text-title'>Marketplace </span>
        <span className='hero-text-subtitle'>Property Listing </span>
      </div>
      <img className='hero-img' alt='img' src='https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
    </div>
  )
}

import React from 'react'
import './ListingItem.css'
import {Link} from 'react-router-dom'

export default function ListingItem() {
  return (
    <div className='listing-item'>
      <img className='listing-img' src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='img'/>
      <div className='listing-details'>
        <div className='listing-categories'>
          <span className='listing-category'>Buy</span>
          <span className='listing-category'>Sell</span>
        </div>
        <Link to='/detail'><span className='listing-title'>Awesome property available</span></Link>
        <hr/>
        <span className='listing-time'>2 days ago</span>
    </div>
        <p className='listing-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sit amet felis vel rhoncus. Suspendisse nisi lectus, dignissim eget eros eget, faucibus pretium lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sit amet felis vel rhoncus. </p>
  </div>
      
  )
}

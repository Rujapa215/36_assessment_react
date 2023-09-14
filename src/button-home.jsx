import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Button_home() {
  return (
    <div>
      <Link to="/user">
        <button style={{
       margin:'20px',
        borderRadius:'4px',
        padding:'15px 32px',
        backgroundColor:'white', 
        textAlign:'center'
        }} >
          User Home Sector
          </button>
        </Link>
    
        <Link to="/admin"><button style={{
       margin:'20px',
        borderRadius:'4px',
         padding:'15px 32px',
         backgroundColor:'white', 
         textAlign:'center'
         }}>Admin Home Sector</button></Link>
    
    </div>
  )
}

export default Button_home
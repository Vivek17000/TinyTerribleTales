import React from 'react'
import {Link} from "react-router-dom";
import "./CSS/Front.css"


  
const Front = () => {
  
   
  

  return (
    <>
    <div className="container">
        <Link to="/fetch" >   
            <button className='my-button'>  
                Click Me             
            </button>
        </Link>
    </div>
  
      
    </>
  )
}

export default Front

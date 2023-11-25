import React from 'react';
import Navbar from '../navbar/Navbar';
import './Main.css';
import { BrowserRouter } from 'react-router-dom';
function Main (){
  
    return (
      <BrowserRouter>
      <div className='main'>
      <Navbar/>
       </div>
     </BrowserRouter>
    
    )
  }
export default Main;

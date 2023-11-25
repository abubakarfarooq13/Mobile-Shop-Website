import React, { forwardRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
function Contact ({},refcontact) {
  

  return (
    <div ref={refcontact} className='contact' >
      <h1>Contact Us</h1>
      <motion.div className='conContainer'>
<motion.form initial={{
          y:"300px",
        }} whileInView={{y:0,transition: {
          type: "spring",
          bounce: 0.6,
          duration:1.5
        }}}>
  <div className='txtField'>
  <input type="text" placeholder='Full Name' required/>
  <input type='email' placeholder='Email Address' required/>
  </div>
  <div className='txtField'>
    <input type='number' placeholder='Mobile Number' required/>
    <input type='text' placeholder='Email Subject' required/>
  </div>
  <div className='txtArea'>
    <textarea  type='textarea' placeholder='Your Message' required/>
  </div>
  <button>Send</button>
</motion.form>
      </motion.div>
    </div>
  );
};

export default forwardRef(Contact);

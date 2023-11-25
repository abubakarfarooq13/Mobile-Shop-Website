import React, { forwardRef } from "react";
import "./Services.css";
import repair from "../../assets/repair.jpg";
import { motion } from "framer-motion";
function Services({}, refservices) {
  return (
    <>
      <div className="heading" ref={refservices}>
        <h1>Our Services</h1>
      </div>
      <div className="container">
        <div className="services">
          <motion.div initial={{
          x:"-300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}}  className="logosr">
            <img src={repair} alt="repair" />
          </motion.div>
          <motion.div initial={{
          y:"300px",
        }} whileInView={{y:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}}  className="srdetails">
            <h2>
              In addition to our wide selection of products, we also offer a
              variety of services, including:
            </h2>
            <motion.div initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}}  className="lidiv">
            <ul>
              <li>Contract phone sales</li>
              <li>Prepaid phone sales</li>
              <li>Repair services</li>
              <li>Accessory sales</li>
              <li>Data transfer</li>
              <li>Phone insurance</li>
            </ul>
            </motion.div>
            <br/>
            <h2>Our Staff</h2>
            <motion.p initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}} >
              Our staff is knowledgeable and friendly, and we are always happy
              to help our customers find the right products and services for
              their needs.
            </motion.p><br/>
            <h2>Our Commitment</h2>
            <motion.p initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}} >
              We are committed to providing our customers with the best possible
              shopping experience. We offer a price match guarantee, and we are
              always happy to answer any questions that you may have.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default forwardRef(Services);

import React, { forwardRef } from "react";
import "./About.css";
import imgMe from "../../assets/about.png";
import apple from "../../assets/apple.png";
import samsung from "../../assets/samsung.jpg";
import mi from "../../assets/mi.jpg";
import { motion } from "framer-motion";
function About({}, refabout) {
  return (
    <>
      <div ref={refabout} className="heading">
        <h1>About Us</h1>
      </div>
      <motion.div  className="about">
        <motion.div  className="detailContainer">
          <motion.div initial={{
          y:"300px",
        }} whileInView={{y:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}}   className="details">
            <motion.h2>ABUBAKAR Mobile Shop</motion.h2>

            <motion.p initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}} >
              We are a leading mobile shop in Gujrat that specializes in the
              sale of Mi, Apple, and Samsung smartphones, tablets, and
              accessories. We are passionate about providing our customers with
              the best possible shopping experience, and we are committed to
              offering the latest products and services at competitive prices.
            </motion.p>

            <motion.h2>Our Products</motion.h2>
            <motion.div initial={{
          x:"-300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}}  className="products">
              <motion.div className="pimg">
                <img src={apple} alt="apple" />
              </motion.div>
              <motion.div className="pimg">
                <img src={samsung} alt="samsung" />
              </motion.div>
              <motion.div className="pimg">
                <img src={mi} alt="mi" />
              </motion.div>
            </motion.div>

            <motion.p style={{ marginTop: "0.5rem" }} initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}} >
              We offer a wide selection of Mi, Apple, and Samsung smartphones,
              tablets, and accessories. We also offer a variety of repair
              services for all of the brands that we sell.
            </motion.p>
          </motion.div>
          <motion.div initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.5,
          duration:1
        }}}  className="img">
            <img src={imgMe} alt="my img" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default forwardRef(About);

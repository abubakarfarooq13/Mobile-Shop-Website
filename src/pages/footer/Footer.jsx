import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div className="ftfooter">
      <footer>
        <div className="fotcontainer">
          <div className="row">
            <motion.div initial={{
          x:"-300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.6,
          duration:1.5
        }}} className="col-md-4">
              <h1>Abubakar's Mobile Shop</h1>
              <p>
                One-stop shop for Mi, Apple, and Samsung smartphones, tablets,
                and accessories.
              </p>
            </motion.div>

            <motion.div initial={{
          x:"300px",
        }} whileInView={{x:0,transition: {
          type: "spring",
          bounce: 0.6,
          duration:1.5
        }}} className="col-md-4">
              <h1>Contact Us</h1>
              <ul>
                <li>Location: Main Street, Gujrat</li>
                <li>Phone: 03039346104</li>
                <li>Email: abubakarfarooq13@gmail.com</li>
              </ul>
            </motion.div>
          </div>
          <motion.div initial={{
          y:"300px",
        }} whileInView={{y:0,transition: {
          type: "spring",
          bounce: 0.6,
          duration:1.5
        }}} className="col-md">
            <h1>Connect with Us</h1>
            <ul>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=100094739877088"
                  target="_blank"
                >
                  <i className="fb">
                    <FaFacebook />
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/abubakar_farooq13/"
                  target="_blank"
                  className="in"
                >
                  <FaInstagram id="in" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://wa.me/923039346104?text=Aslamo%20Alaikum%0AAbubakar%20I%20like%20you'r%20web%20&#128522"
                  target="_blank"
                >
                  <i className="wa">
                    <FaWhatsapp />
                  </i>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="copyright">
          <p>&copy; Abubakar's Mobile Shop 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

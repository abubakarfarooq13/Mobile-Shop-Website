import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import NavbarData from "../../utils/NavbarData";
import "./Navbar.css";
import { useRef, useState } from "react";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Services from "../../pages/services/Services";
import Contact from "../../pages/contact/Contact";
import Footer from "../../pages/footer/Footer";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(true);
  const refhome = useRef(null);
  const refabout = useRef(null);
  const refservices = useRef(null);
  const refcontact = useRef(null);

  const goToHome = () => {
    refhome.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToAbout = () => {
    refabout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToContact = () => {
    refcontact.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToServices = () => {
    refservices.current?.scrollIntoView({ behavior: "smooth" });
  };
  // for collapsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "10rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "5rem",
      backgroundColor: "rgb(255, 255, 255)",
    },
    false: {
      alignSelf: "center",
      marginTop: "2rem",
      width: "5rem",
      backgroundColor: "transparent",
    },
  };
  return (
    <div className="Navbar">
      <motion.div
        data-open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <FiMenu />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 0px 20px 0 rgba(255, 255, 255, 0.60)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="profile_img" />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <NavLink
                className="navLink"
                to="/"
                onClick={goToHome}
                style={({ isActive }) => ({
                  color: isActive ? "gold" : "#fff",
                })}
              >
                <NavbarData icon={<FaHome />} name="Home" />
              </NavLink>
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <NavLink
              className="navLink"
              onClick={goToAbout}
              to="about"
              style={({ isActive }) => ({
                color: isActive ? "gold" : "#fff",
              })}
            >
              <NavbarData icon={<FaInfo />} name="About" />
            </NavLink>
          </div>
          {/* group 3 */}
          <div className="group">
            <NavLink
              className="navLink"
              to="services"
              onClick={goToServices}
              style={({ isActive }) => ({
                color: isActive ? "gold" : "#fff",
              })}
            >
              <NavbarData icon={<MdMiscellaneousServices />} name="Services" />
            </NavLink>
          </div>
          <div className="group">
            <NavLink
              className="navLink"
              to="/contact"
              onClick={goToContact}
              style={({ isActive }) => ({
                color: isActive ? "gold" : "#fff",
              })}
            >
              <NavbarData icon={<MdContactPage />} name="Contact" />
            </NavLink>
          </div>
        </motion.div>
      </motion.div>
      <div className="body_container">
        <Home ref={refhome} />
        <About ref={refabout} />
        <Services ref={refservices} />
        <Contact ref={refcontact} />
        <Footer />
      </div>
    </div>
  );
}
export default Navbar;

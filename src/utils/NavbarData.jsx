import React, { Component } from 'react'
import {motion} from 'framer-motion'
import './NavbarData.css';

class NavbarData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false, opacity:0 });
  };

  render() {
    const { icon, name } = this.props;
    // const { hovered } = this.state;

    const subheadingStyles = {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
        display: 'none',
      },
    };

    return (
      <motion.div
        className='item'
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 0px 20px 0 rgba(255, 255, 255, 0.60)",
          backdropFilter: "blur(5.5px)",
          WebkitBackdropFilter: "blur(5.5px)",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          cursor: 'pointer',
      
        }}
        transition={{
          duration: 0.4,
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <motion.div className='icon'>
          {icon}
        </motion.div>
        <motion.span 
          variants={subheadingStyles}
        >
        {name}
        </motion.span>
      </motion.div>
    )
  }
}

export default NavbarData;

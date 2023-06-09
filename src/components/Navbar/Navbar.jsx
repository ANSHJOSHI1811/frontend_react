import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <a href="https://drive.google.com/file/d/1jWBKlAyxM9SMtHcaIEvbnTAVI9p4uBhN/view?usp=sharing" download><button style={{ backgroundColor: '#313bac', color: 'white', padding: '10px 12px', border: 'none',fontFamily:"DM Sans",fontWeight:'bold',cursor: 'pointer',
 borderRadius: '5px' }}>View Resume</button></a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
      
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(true)}>
                    {item}
                  </a>
                </li>
              ))}
              
            </ul>
          </motion.div>
        )
      }
      </div>
    </nav>
  );
};

export default Navbar;
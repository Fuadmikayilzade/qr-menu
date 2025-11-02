// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Luxbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// const Portfolio = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//     const navigate = useNavigate();
    
//     const handleButtonClick = () => {
//       navigate('/'); // About səhifəsinə yönləndirmə
//     };
  

//   return (
//     <div>
//       {/* Menu Button */}
//       <div className='menu'>
//       <h6 className='fm' onClick={handleButtonClick}>FM</h6>
//         <button className={`btn3 ${menuOpen ? 'transparent' : ''}`} onClick={toggleMenu}>
//           <FontAwesomeIcon className='icon1' icon={menuOpen ? faX : faBars} />
//         </button>
//       </div>

//       {/* Navigation Menu */}
//       <div className={`menubar ${menuOpen ? 'show' : 'hidden'}`}>
//         <ul>
//           <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10'>Home</li></Link>
//           <Link to="/about" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10'>About</li></Link>
//           <li className='text10' onClick={closeMenu}>Services</li>
//           <li className='text10' onClick={closeMenu}>Projects</li>
//           <li className='text10' onClick={closeMenu}>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Luxbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // const navigate = useNavigate();
  
  // const handleButtonClick2 = () => {
  //   navigate('/'); // Home səhifəsinə yönləndirmə
  // };

  return (
    <div>
      {/* Menu Button */}
      <div className='menu'>
        {/* FM elementini menyu açıq olduqda gizlətmək üçün şərt */}
        <div className='menubutton'>
        <button className={`btn3 ${menuOpen ? 'transparent' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon className='icon1' icon={menuOpen ? faX : faBars} />
        </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`menubar ${menuOpen ? 'show' : 'hidden'}`}>
        <ul>
          <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10'>Ana səhifə</li></Link>
          <Link to="/about" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10'>Haqqında</li></Link>
          <Link to="/services" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10' >Xidmətlər</li></Link>
          {/* <Link to="/projects" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10' >Projects</li></Link> */}
          <Link to="/contact" onClick={closeMenu} style={{ textDecoration: 'none' }}><li className='text10' >Əlaqə</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;

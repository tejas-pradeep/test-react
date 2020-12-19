import React, {useState} from 'react'
import {Link} from "react-router-dom";
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closedMenu = () => setClick(false);
   return (
       <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to = "/" className = "navbar-logo">
                        BBB
                   </Link>
                   <div className="menu-icon" onClick = {handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? "nav-menu-active" : "nav-menu"}>
                       <li className='nav-item'>
                           <Link to ="/" className='nav-links' onClick={closedMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to ="/home2" className='nav-links' onClick={closedMenu}>
                               Home2
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to ="/home3" className='nav-links' onClick={closedMenu}>
                               Home3
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to ="/home4" className='nav-links' onClick={closedMenu}>
                               Home4
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to ="/signup" className='nav-links-signup' onClick={closedMenu}>
                              Sign Up
                           </Link>
                       </li>
                   </ul>

               </div>
           </nav>
       </>
   );
}
export default Navbar;
import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(){

    return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink  exact activeClassName="active" to="/" className="nav-link nav-item" >Home</NavLink>
       
          <NavLink activeClassName="active"  to="/about" className="nav-link nav-item" >About</NavLink>
        
          <NavLink activeClassName="active" to="/login" className="nav-link nav-item" >Login</NavLink>
      </ul>
    </div>
</nav>

    );
}
export default Navbar;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useNavigate,Link} from 'react-router-dom';
import "../components/Navbar.css";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleSearchChange = (e) => { setSearchTerm(e.target.value);
     onSearch(e.target.value); };
  
  return (
    
    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rapidken.AI</a>
    
    <input type="text" className="search-bar" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Page</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-2">
        <li>
          <Link to='/register'>Employee Registration Page</Link>
             </li>

          <li>
          <Link to='/list'>Employee Listing page</Link>

             </li>
          </ul>
          </div>
          </div>

       
   
         
      
    </div>
  
</nav>
  );
}


export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="navbar">
      <nav>
        <ul >
          <li >
            <Link to="/" >Home</Link>
          </li>
          
        </ul>
      </nav>
      
      <li>
            <Link to="/add-patient">Add a Patient</Link>
            
          </li>
          
          <li>
            <Link to="/AdminVaccinations">Administer Vaccinations</Link>
          </li>
    </section>
  );
};

export default Home;
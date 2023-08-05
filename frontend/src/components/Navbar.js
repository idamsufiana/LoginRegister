import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const Logout = async() =>{
    try{
        await axios.delete('http://localhost:5000/logout');
        navigate("/");

    } catch(error){
        console.log(error);
    }
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        .<div className="container is-fluid">
           
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
    </a>

    <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div href="/" id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <button onClick={Logout} className="button is-primary">
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>
  )
}

export default Navbar
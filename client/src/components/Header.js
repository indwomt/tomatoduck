import react from 'react'
import icon from '../assets/tomato-24.svg'

export default function Header() {
    return (
    <div class='container'>
      <nav className="navbar">
        
        <a className="navbar-brand" href="#">
          <img src={icon} />
          TomatoDuck
        </a>
        <button class='login-btn'>Sign In</button>
      </nav>
      </div>
    );
  }
  
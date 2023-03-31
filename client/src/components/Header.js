import react from 'react'
import icon from '../assets/tomato-24.svg'

export default function Header() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src={icon} />
          TomatoDuck
        </a>
      </nav>
    );
  }
  
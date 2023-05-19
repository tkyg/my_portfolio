import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [expandNavBar, setExpandNavBar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setExpandNavBar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavBar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={() => {
          setExpandNavBar((previous) => !previous)
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <div className='links'>
        <p>Tenzin Tenkyong</p>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  )
}

export default NavBar
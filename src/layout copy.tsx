import { Suspense } from 'react'
import { Link, Outlet } from 'react-router'
import { ROUTES } from './app'
import './App.css'

const Error = () =>{
  return(
    <>Error</>
  )
}
export const Layout = () => {


  return (
    <div className="wrapper">
      <header className="header">
        <a href="" className="logo">prestige<span>CV</span></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
          </label>
        <ul className="menu">
          <li><Link to={ROUTES.home}>HOME</Link></li>
          <li><Link to={ROUTES.home}>CV TEMPLATED</Link></li>
          <li><a href="#about" style={{color:'#000'}}>COVER LETTER</a></li>
          <li><a href="#about" style={{color:'#000'}}>CV ANALYZER</a></li>
          <li><a href="#careers" style={{color:'#000'}}>LOGIN</a></li>
          <li><a href="#contact" style={{color:'#000'}}>CREATE CV</a></li>
        </ul>
      </header>
      <main>
        <div>dddd</div>
     jjjj
      </main>
      <footer>
        <p>&copy; 2026 PrestigeCV All Rights Reserved.</p>
      </footer>
    </div>
  )
}



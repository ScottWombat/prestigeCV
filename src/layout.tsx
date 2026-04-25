import { Suspense } from 'react'
import { Link, Outlet } from 'react-router'
import { ROUTES } from './app'
import './App.css'

const Error = () => {
  return (
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
          <li><Link to={ROUTES.cvtemplates}>CV TEMPLATED</Link></li>
          <li><Link to={ROUTES.coverletter}>COVER LETTER</Link></li>
          <li><a href="#about" style={{ color: '#000' }}>CV ANALYZER</a></li>
          <li><Link to={ROUTES.cvlogin}>LOGIN</Link></li>
          <li><Link to={ROUTES.cvcreate}>CREATE CV</Link></li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Outlet />
        </Suspense>
        <footer>
        <p>&copy; 2026 PrestigeCV All Rights Reserved.</p>
        </footer>
      </main>
     
    </div>
  )
}



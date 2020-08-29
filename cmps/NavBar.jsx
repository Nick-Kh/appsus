const { NavLink, withRouter } = ReactRouterDOM

export const _NavBar = () => {

  function toggleMenu() {
    document.body.classList.toggle('menu-open')
  }

  return (
    <nav className='nav-bar'>

      <div className="screen" onClick={toggleMenu}></div>

      <div className="img">
        <img src="img/logo.png" />
      </div>
      <i className="hamburger fas fa-bars" onClick={toggleMenu}></i>
      <i className="x fas fa-times" onClick={toggleMenu}></i>
      <ul>
        <NavLink to='/' onClick={toggleMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink to='/email' onClick={toggleMenu}>
          <li>Email</li>
        </NavLink>
        <NavLink to='/note' onClick={toggleMenu}>
          <li>Notes</li>
        </NavLink>
        <NavLink to='/book' onClick={toggleMenu}>
          <li>Books</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export const NavBar = withRouter(_NavBar)
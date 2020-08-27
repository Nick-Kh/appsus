const { NavLink, withRouter } = ReactRouterDOM

export const _NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div className="img">
        <img src="./img/logo.png" />
      </div>
      <ul>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/email'>
          <li>Email</li>
        </NavLink>
        <NavLink to='/note'>
          <li>Notes</li>
        </NavLink>
        <NavLink to='/book'>
          <li>Books</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export const NavBar = withRouter(_NavBar)

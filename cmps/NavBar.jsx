const { NavLink, withRouter } = ReactRouterDOM

export const _NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/email'>
          <li>Mail</li>
        </NavLink>
        <NavLink to='/note'>
          <li>Note</li>
        </NavLink>
        <NavLink to='/book'>
          <li>Book</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export const NavBar = withRouter(_NavBar)

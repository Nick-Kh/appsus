const { NavLink, withRouter } = ReactRouterDOM

function _NavBar() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src="./assets/img/logo.png" />
      </div>
      <div className="links">
        <NavLink exact activeClassName='active-nav' to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export const NavBar = withRouter(_NavBar)
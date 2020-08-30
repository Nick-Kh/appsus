const { NavLink } = ReactRouterDOM

export const Home = () => {
  return (
    <section className='home-page'>
      <div className='homepage-info'>
        <img src='./img/appsus.png' alt='' />
        <div className='homepage-title'>
          <div>APPSUS</div>
          <div>
            your ultimate work place<span style={{ color: 'darkcyan' }}>.</span>
          </div>
        </div>
      </div>
      <div className='homepage-icons'>
        <NavLink to='/email'>
          <img src='./img/mail.png' alt='' />
        </NavLink>
        <NavLink to='/note'>
          <img src='./img/note.png' alt='' />
        </NavLink>
        <NavLink to='/books'>
          <img src='./img/book.png' alt='' />
        </NavLink>
      </div>
    </section>
  )
}

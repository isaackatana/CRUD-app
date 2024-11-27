import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
    <header>
        <div className="logo">
          <div>Bado Wewe</div>
        </div>

        <nav>

          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/store'>Store</NavLink>
            <NavLink to='/about'>About</NavLink>
          </ul>
          <div className="shopping-cart">
              <button className="add-to-cart">+</button>
          </div>

          <div className="user-profile">
              <button className="sign-up">
                Sign up
              </button>
              <button className="sign-in">
                Sign in
              </button>
              <button className="sign-out">
                Sign out
              </button>
              <div className="profile-icon">
              </div>
          </div>
        </nav>
    </header>
    </>
  )
}

export default Header
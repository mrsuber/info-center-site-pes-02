import './Header.css'
import logo from '../../images/logo/suber_logo1.png'
import { Link } from 'react-router-dom'
 const Header =()=>{

   const bfLoginLinks =[
     {label:'Login',path:'/login'},
      {label:'Register',path:'/register'}
   ]

  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">


      <span className="info__brand-wrapper">
         <Link to="/" className="info__link"> <img src={logo} className="info__brand-img" alt=""/></Link>
         <h1 className="info_logoText" onClick={()=>window.scrollTo({top:0})}>Info-Center</h1>

       </span>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">

            {
              bfLoginLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={link.path}>{link.label}</Link>
                </li>
              ))
            }

            <li className="nav-item dropdown">

              <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                UserName
              </span>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/profile">Profle</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/">Logout</Link></li>
              </ul>


            </li>

          </ul>

        </div>

    </nav>

  )
}

export default Header

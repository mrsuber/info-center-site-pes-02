import './Header.css'
import logo from '../../images/logo/suber_logo1.png'
import { Link } from 'react-router-dom'
import {Search,Menu} from '../../components'


 const Header =()=>{



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
        <Search />
        <Menu/>

        </div>

    </nav>

  )
}

export default Header

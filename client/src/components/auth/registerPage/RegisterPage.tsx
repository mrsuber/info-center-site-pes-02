import "./RegisterPage.css"
import {RegisterForm} from "../../../components"
import {Link} from 'react-router-dom'
import {useState} from 'react'


const RegisterPage = () =>{
  const [sms, setSms] = useState(false)
  return(
    <div className="info__auth_page">
      <div className="info__auth_box">
        <h3 className="info__auth_title">Register to info Center</h3>
        <RegisterForm />
        <p>
          {`Already have an account? `}
          <Link to={`/login`} className="info__register_link"> Login Now</Link>
        </p>


      </div>
    </div>
  )
}


export default RegisterPage

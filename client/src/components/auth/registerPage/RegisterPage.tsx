import "./RegisterPage.css"
import {LoginPass,LoginSMS} from "../../../components"
import {Link} from 'react-router-dom'
import {useState} from 'react'


const RegisterPage = () =>{
  const [sms, setSms] = useState(false)
  return(
    <div className="info__auth_page">
      <div className="info__auth_box">
        <h3 className="info__auth_title">Login to info Center</h3>
        {sms ? <LoginSMS/> : <LoginPass /> }

        <small className="info__forgot_password_link_container">
            <span className="info__forgot_password_link ">
              <Link to="/forgot_password" > Forgot password</Link>
            </span>

            <span className="info__forgot_password_link2" onClick={() =>setSms(!sms)}>
            {sms? 'Sign in with password' : 'Sign in with SMS'}
            </span>
        </small>

        <p>
          {`You don't have an account? `}
          <Link to={`/register`} className="info__register_link"> Register Now</Link>
        </p>


      </div>
    </div>
  )
}


export default RegisterPage

import './LoginPage.css'
import {LoginPass} from "../../../components"


const LoginPage = () =>{
  return(
    <div className="info__auth_page">
      <div className="info__auth_auth">
        <h3 className="info__auth_title">login</h3>
        <LoginPass />
      </div>
    </div>
  )
}

export default LoginPage

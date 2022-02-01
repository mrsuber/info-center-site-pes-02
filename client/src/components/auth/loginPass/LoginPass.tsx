import './LoginPass.css'
import {useState} from 'react'
import {InputChange} from '../../../utils/TypeScript'

const LoginPass = () =>{
  // handle unchange input
  const initialState = {account:'', password:''}
  const [userLogin, setUserLogin] = useState(initialState)
  const {account,password} = userLogin

  const handleChangeInput =(e:InputChange)=>{
    const {value, name} = e.target
    setUserLogin({...userLogin,[name]:value})
  }


  //handle password hide or shadow
  const [typePass, setTypePass] = useState(false)
  return(
    <form>
        <div className="info__form_group">
          <label htmlFor= "account">Email / Phone number</label>
          <input
          type="text"
          className="info__login_email_input"
          id="account"
          name="account"
          value={account}
          onChange={handleChangeInput}
          />
        </div>

        <div className="info__form_group">
          <label htmlFor= "password">Password</label>
          <div className="info__pass">
              <input
              type={typePass ? "text" : "password"}
              className="info__login_email_input"
              id="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
              />
              <small onClick={()=>setTypePass(!typePass)} className="info__hide_show">
                {typePass ? 'Hide' : 'Show'}
              </small>
          </div>

        </div>

        <button type="submit" className="info__login_submit_btn" disabled={(account && password)? false : true}>
        Login
        </button>
    </form>
  )
}

export default LoginPass

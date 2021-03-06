import './LoginPass.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {InputChange,FormSubmit} from '../../../utils/TypeScript'
import {login} from '../../../redux/actions/authAction'


const LoginPass = () =>{
  // handle unchange input
  const initialState = {account:'', password:''}
  const [userLogin, setUserLogin] = useState(initialState)
  const {account,password} = userLogin

  const handleChangeInput =(e:InputChange)=>{
    const {value, name} = e.target
    setUserLogin({...userLogin,[name]:value})
  }


  //handle password hide or show password
  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e:FormSubmit)=>{
    e.preventDefault()
    dispatch(login(userLogin))
  }
  return(
    <form onSubmit={handleSubmit}>
        <div className="info__form_group">
          <label htmlFor= "account" className="info__form_label">Email / Phone number</label>
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
          <label htmlFor= "password" className="info__form_label">Password</label>
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

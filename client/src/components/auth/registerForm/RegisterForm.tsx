import './RegisterForm.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {InputChange,FormSubmit} from '../../../utils/TypeScript'
// import {login} from '../../../redux/actions/authAction'


const RegisterForm = () =>{
  // handle unchange input
  const initialState = {
    name:'', account:'', password:'', cf_password:''
  }

  const [userRegister, setUserRegister] = useState(initialState)
  const {name,account,password,cf_password} = userRegister

  //handle password hide or show password
  const [typePass, setTypePass] = useState(false)
  const [typeCfPass, setTypeCfPass] = useState(false)


  const dispatch = useDispatch()


  const handleChangeInput =(e:InputChange)=>{
    const {value, name} = e.target
    setUserRegister({...userRegister,[name]:value})
  }




  const handleSubmit = (e:FormSubmit)=>{
    e.preventDefault()
    // dispatch(login(userRegister))
  }
  return(
    <form onSubmit={handleSubmit}>
          <div className="info__form_group">
            <label htmlFor= "name" className="info__form_label">Name</label>
            <input  type="text" className="info__login_email_input"  id="name"  name="name" value={name}  onChange={handleChangeInput}   />
          </div>

        <div className="info__form_group">
          <label htmlFor= "account" className="info__form_label">Email / Phone number</label>
          <input type="text"   className="info__login_email_input" id="account" name="account" value={account}  onChange={handleChangeInput}  />
        </div>

        <div className="info__form_group">
          <label htmlFor= "password" className="info__form_label">Password</label>
          <div className="info__pass">
              <input  type={typePass ? "text" : "password"} className="info__login_email_input"  id="password" name="password"  value={password} onChange={handleChangeInput} />
              <small onClick={()=>setTypePass(!typePass)} className="info__hide_show">
                {typePass ? 'Hide' : 'Show'}
              </small>
          </div>

        </div>

        <div className="info__form_group">
          <label htmlFor= "cf_password" className="info__form_label"> Confirm Password</label>
          <div className="info__pass">
              <input  type={typeCfPass ? "text" : "password"} className="info__login_email_input"  id="cf_password" name="cf_password"  value={cf_password} onChange={handleChangeInput} />
              <small onClick={()=>setTypeCfPass(!typeCfPass)} className="info__hide_show">
                {typeCfPass ? 'Hide' : 'Show'}
              </small>
          </div>

        </div>


        <button type="submit" className="info__login_submit_btn" disabled={(account && password && cf_password && name)? false : true}>
        Register
        </button>
    </form>
  )
}

export default RegisterForm

import { useState } from 'react'
import './LoginSMS.css'


const LoginSMS = () =>{
  const [phone, setPhone] = useState('')
  return(
    <form>
      <div className="info__form_phone_group">
        <label htmlFor="phone" className="info__form_phone_label">Phone Number</label>
        <input type="text" className="info__login_email_input info__phone_input" id="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>

      </div>
      <button type="submit" className="info__login_submit_btn" disabled={phone ? false : true}> login</button>
    </form>
  )
}

export default LoginSMS

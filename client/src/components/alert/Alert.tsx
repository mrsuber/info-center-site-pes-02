import {useSelector} from 'react-redux'
import {Loading,Toast} from '../../components'
import './Alert.css'
import { RootStore } from '../../utils/TypeScript'


const Alert = () => {
  const {alert} = useSelector((state:RootStore)=>state)
  return(
    <div className="info__alert_container">
	{alert.loading && <Loading/>}
    {
      alert.errors &&
       <Toast
        title="Errors"
        body={alert.errors}
        bgColor="bg-danger"
       />
     }
    </div>
  )
}

export default  Alert

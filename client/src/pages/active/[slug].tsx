import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {IParams} from '../../utils/TypeScript'
import {postAPI} from '../../utils/fetchData'

const Active = () =>{
  const {slug}:IParams = useParams()


  useEffect(()=>{
    if(slug){
      postAPI('active',{active_token:slug})
      .then(res=>console.log(res))
    }
  },[slug])
  return(
    <div>
    <h1>Active</h1>
    </div>

  )
}

export default Active

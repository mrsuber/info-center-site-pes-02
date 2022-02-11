import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'
import path from 'path'
import {Request,Response} from 'express'

//Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())


//Routes
app.use('/api/', routes.authRouter)

//Database
import './config/database'

//checking if server is developement or production
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'../client/build')))
  app.get('*',(req:Request, res:Response)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'))

  })
}else{
  app.get('/', (req:Request, res:Response)=>{
    res.send('Api running');
  })
}

//server listening
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
})

import express, { Application, NextFunction, Request, Response, request, response } from 'express'
import cors from 'cors'
const app: Application = express()
import userService from './app/modules/users/user.service'
import router from './app/modules/users/user.route'
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandlers'
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//application 
console.log(app.get('env'))
console.log(process.env);


// Application routes
app.use('/api/v1/users/', router)

// app.get('/', (req: Request, res: Response, next:NextFunction) => {
//   throw new ApiError (400 , 'ore baba Error')
//   // next('Ore baba Error')
//   // await userService.createUser({
//   //   id :'999',
//   //   password : '12323',
//   //   role:'student'
//   // })
//   // res.send('Working Successfully')
// })

// eta hocce global error handling
app.use(globalErrorHandler)

export default app

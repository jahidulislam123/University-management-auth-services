import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import userService from './app/modules/users/user.service'
import router from './app/modules/users/user.route'
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//application 
console.log(app.get('env'))
console.log(process.env);


// Application routes
app.use('/api/v1/users/', router)

app.get('/', async(req: Request, res: Response) => {
  await userService.createUser({
    id :'999',
    password : '12323',
    role:'student'
  })
  res.send('Working Successfully')
})

export default app

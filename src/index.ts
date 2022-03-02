import express, { Application } from 'express'
import cors from 'cors'
import indexRouter from './routes/index'

const app: Application = express()
const port = process.env.DB_SERVER || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CORS
app.use(cors())
app.options('*', cors)

//Routes
app.use('/', indexRouter)

app.listen(port, (): void => {
  console.log(`Connected successfully on port ${port}`)
})

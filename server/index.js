import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import user from './controllers/users.js'
import auth from './controllers/auth.js'
import './db.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/api/user",user)
app.use("/api/auth",auth)


const port = process.env.PORT || 5200
app.listen(port, () => console.log(`Server is running on port ${port}`))
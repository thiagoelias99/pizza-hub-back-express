import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import router from './routes'
import errorHandler from './middlewares/errorHandler'

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

//Cors configuration
const corsOptions = {
    origin: 'http://localhost:3000',
}
server.use(cors(corsOptions))

//Middlewares
server.use(morgan('dev'))

//Routes
server.use('/api/v1', router)

//Error handler
server.use(errorHandler)

const port = 3333

server.listen(port, () => {
    const data = new Date()
    console.log(`Node server started in ${data.toLocaleString()} at http://localhost:${port}`)
})

export default server
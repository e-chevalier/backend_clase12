import express from 'express'
import config from './config/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { serverRoutes } from './routes/index.js'
import sessionFileStore from 'session-file-store'



const PORT = config.port

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))
app.use(cookieParser())
app.use(cors("*"))

let FileStore = sessionFileStore(session)

app.use(session({
    store: new FileStore({path: '../sesiones', ttl:300, retries: 0}),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 10000}
}))

serverRoutes(app)

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error while starting server")
    } else {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}
                 Open link to http://127.0.0.1:${server.address().port}`)
    }  
})


server.on('error', error => console.log(`Error en servidor ${error}`))
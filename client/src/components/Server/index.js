import express from 'express'
import cors from "cors"
import { renderToString } from 'react-dom/server'
import App from './App.js'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("server is listening on port: 3000")


}) 
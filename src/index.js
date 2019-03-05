require("dotenv").config()//deixa acessivel as variaveis ambiemte para todo projeto

const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")

const app =  express()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})

app.use(cors())//libera acesso para todos os dominios poderem acessar a API exemplo um app de front usando react
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

//liberando acesso para arquivos estaticos - tornar acessivel para teste local
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")))

app.use(require("./routes"))

app.listen(process.env.PORT)
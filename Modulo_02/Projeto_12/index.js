const express = require('express')
const database = require('./db')
const Livro = require('./livro')

const app = express()
const PORT = 3000

const initApp = async () => {
    try {
        await database.authenticate()
        console.log("Conexão com o banco de dados realizada com sucesso!")

        Livro.sync({
            alter: true,
        })

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        })
    } catch(error) {
        console.error('Servidor não conectado ao banco de dados', error)
    }
}

initApp()
const express = require('express')
const app = express()

app.use(express.json())

const livros =  [
    {
        "nome": 'O guia definitivo do mochileiro das galáxias',
        "autor": 'Douglas Adams',
        "ISBN": 8530601491
    },
    {
        "nome": 'O Hobbit',
        "autor": 'J.R.R. Tolkien',
        "ISBN": 8595084742
    },
    {
        "nome": 'O pequeno príncipe',
        "autor": 'Antoine de Saint-Exupéry',
        "ISBN": 8595081514
    }
]

app.get('/livros', (request, response) => {
    response.json(livros)      
})

app.post('/livros', (request, response) => {
    const {nome, autor, ISBN} = request.body
    livros.push({nome, autor, ISBN})

    return response.status(201).json(livros)    
})

app.put('/livros/:index', (request, response) => {
    const {index} = request.params
    const {nome, autor, ISBN} = request.body

    livros[index] = {nome, autor, ISBN}

    return response.status(200).json(livros)    
    
})

app.delete('/livros/:index', (request, response) => {
    const {index} = request.params

    livros.splice(index, 1)
    return response.send('Livro deletado')
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`app listening PORT:${PORT}`)
})
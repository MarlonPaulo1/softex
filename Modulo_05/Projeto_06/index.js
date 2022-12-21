const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const alunos =  ['Marlon', 'Paulo', 'Silva', 'Amaral']

app.get('/alunos', (request, response) => {
    try {
        response.json(alunos)    
    } catch {
        return resizeBy.status(400).send({error: 'erro ao achar um aluno'})
    }
    
})

app.post('/alunos', (request, response) => {
    try{
        const {name} = request.body
        alunos.push(name)

        return response.status(201).json(alunos)    
    } catch (err) {
        return resizeBy.status(404).send({error: 'erro na criação de um aluno'})
    }
    
})

app.put('/alunos/:index', (request, response) => {
    try {
        const {index} = request.params
        const {name} = request.body

        alunos[index] = name

        return response.status(200).json(alunos)    
    } catch (err) {
        return resizeBy.status(404).send({error: 'erro na edição de um aluno'})
    }
    
})

app.delete('/alunos/:index', (request, response) => {
    const {index} = request.params

    alunos.splice(index, 1)
    return response.send('aluno deletado')
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`app listening PORT:${PORT}`)
})
import { Router } from "express";

const routes = Router()

const cursos = ['HTML', 'CSS', 'Javascript', 'NodeJs']

// Listagem de Cursos
routes.get('/cursos', (request, response) => {
    return response.json(cursos)
})

// Adicionar novo Curso
routes.post('/cursos', (request, response) => {
    const { novoCurso } = request.body
    cursos.push(novoCurso)

    return response.json(cursos)
})

// Editar um Curso
routes.put('/cursos/:index', (request, response) => {
    const { index } = request.params
    const { nomeDoCurso } = request.body

    cursos[index] = nomeDoCurso

    return response.json(cursos)
})

// Deletar um Curso
routes.delete('/cursos/:index', (request, response) => {
    const { index } = request.params

    cursos.splice(index, 1)

    return response.json({ message: "O curso foi deletado" })
})

export default routes
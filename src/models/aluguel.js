const livro_controller = require("../controllers/livro.js")
const estudante_controller = require("../controllers/estudante.js")
const timeElapsed = Date.now()
const today = new Date(timeElapsed)
let nextId = 1

const model = (body, id = nextId++) => {
    if(
        livro_controller.show(body.livro_id),
        estudante_controller.show(body.estudante_id)
    ){
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: today.toISOString(),
            data_devolucao: body.data_devolucao
        }
    }
}

module.exports = model
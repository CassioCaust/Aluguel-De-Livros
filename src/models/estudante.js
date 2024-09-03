let proxId = 1;

const model = (body, id = proxId++) => {
    if (
        body.nome != undefined &&
        body.matricula != undefined &&
        body.curso != undefined &&
        body.ano != isNaN()
    ){
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model
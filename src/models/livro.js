let proxId = 1;

const model = (body, id = proxId++) => {
    if (
        body.titulo != undefined &&
        body.autor != undefined &&
        body.genero != undefined &&
        body.ano != isNaN()
    ){
        return {
            id,
            nome: body.nome,
            autor: body.autor,
            genero: body.genero,
            ano: body.ano
        }
    }
}

module.exports = model
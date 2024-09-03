const express = require("express")

const livro_router = require("./routes/livro.js")
const estudante_router = require("./routes/estudante.js")
const aluguel_router = require("./routes/aluguel.js")
const app = express()
const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/aluguel", aluguel_router)
app.use("/estudante", estudante_router)
app.use("/livro", livro_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})

// commit
const app = require("./src/app")
const PORT = 7070

app.listen(PORT, () => {
    console.log("O Nosso app esta rodando na porta " + PORT)
})
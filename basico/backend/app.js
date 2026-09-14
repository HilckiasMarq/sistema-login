import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Bom dia")
})

app.post("/dados", async (req, res) => {
    const dados = fs.readFileSync("dados.json", "utf-8")
    const obj = JSON.parse(dados)

    for (let i = 0; i < obj.length; i++) {
        if (req.body.email === obj[i].email) {
            return res.status(200).json({
                mensagem: obj[0].email
            })
        }
    }

    return res.status(404).json({
        mensagem: "E-mail não encontrado"
    })
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})
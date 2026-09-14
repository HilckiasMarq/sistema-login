import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Bom dia")
})

app.post("/login", async (req, res) => {
    const dados = fs.readFileSync("dados.json", "utf-8")
    const obj = JSON.parse(dados)

    for (let i = 0; i < obj.length; i++) {
        if (req.body.email === obj[i].email && req.body.senha === obj[i].senha) {
            return res.status(200).json({
                mensagem: obj[i].email,
                mensagem: obj[i].senha
            })
        }
    }

    return res.status(404).json({
        mensagem: obj[i].email,
        mensagem: obj[i].senha
    })
})

app.post("/logon", async (req, res) => {
    const obj = JSON.parse(fs.readFileSync("dados.json", "utf-8"))

    obj.push({
        email: req.body.email,
        senha: req.body.senha
    })

    fs.writeFileSync("dados.json", JSON.stringify(obj, null, 2), "utf-8")

    res.status(201).send({
        mensagem: "Usuário cadastrado"
    })
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})
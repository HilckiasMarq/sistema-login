document.getElementById("login").addEventListener("click", async () => {
    const emailv = document.getElementById("email").value
    const senhav = document.getElementById("senha").value

    const resposta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailv, senha: senhav })
    })

    if (resposta.ok) {
        document.getElementById("resposta").innerHTML = "Usuário encontrado"
    } else {
        document.getElementById("resposta").innerHTML = "Usuário não encontrado"
    }
})

document.getElementById("logon").addEventListener("click", async () => {
    const emailc = document.getElementById("emailc").value
    const senhac = document.getElementById("senhac").value

    const retorno = await fetch("http://localhost:3000/logon", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailc, senha: senhac })
    })

    if (retorno.ok)
        document.getElementById("respostal").innerHTML = "Usuário cadastrado"
    else
        document.getElementById("respostal").innerHTML = "Usuário não cadastrado"
})
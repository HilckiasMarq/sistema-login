document.getElementById("logon").addEventListener("click", async () => {
    const emailc = document.getElementById("email").value
    const senhac = document.getElementById("senha").value

    const retorno = await fetch("http://localhost:3000/logon", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailc, senha: senhac })
    })

    const infos = await retorno.json()

    if (retorno.ok) {
        window.location.href = "./login.html"
        alert("Você foi cadastrado com sucesso")
    } else {
        alert(infos.mensagem)
    }
})
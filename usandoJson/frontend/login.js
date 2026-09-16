document.getElementById("login").addEventListener("click", async () => {
    const emailv = document.getElementById("email").value
    const senhav = document.getElementById("senha").value

    const resposta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailv, senha: senhav })
    })

    if (resposta.ok)
        window.location.href = "./index.html"
    else
        alert("Usuário não encontrado")
})

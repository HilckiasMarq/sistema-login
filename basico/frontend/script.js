document.getElementById("enviar").addEventListener("click", async () => {
    const valor = document.getElementById("email").value

    const resposta = await fetch('http://localhost:3000/dados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: valor })
    })

    if (resposta.ok) {
        document.getElementById("resposta").innerHTML = "Usuário encontrado"
    } else {
        document.getElementById("resposta").innerHTML = "Usuário não encontrado"
    }
})
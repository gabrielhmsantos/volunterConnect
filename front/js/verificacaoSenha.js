function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaconfirm = document.getElementById("senhaconfirm").value;
    const mensagem = document.getElementById("mensagem");

    if (senha === senhaconfirm) {
        mensagem.textContent = "Senhas coincidem";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Senhas não coincidem";
        mensagem.style.color = "red";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Isso impede o envio padrão do formulário

        const usertype = document.getElementById("usertype").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;


        const data = {
            tipoLogin: usertype,
            login: username,
            senha: password,
        };

        console.log("Dados a serem enviados:", data); // Adiciona um log para verificar os dados sendo enviados

        // Exibir uma mensagem enquanto a solicitação está sendo processada
        alert("Enviando dados...");

        try {
            const response = await axios.post("https://volunterconnectapi.onrender.com/login", data);

            console.log(response)

            if (response.status == 200) {
                alert("Você está logado.");
                window.location.href = "boas_vindas.html";
            } else {
                alert("Falha no login. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro durante o login.");
        }
    });
});
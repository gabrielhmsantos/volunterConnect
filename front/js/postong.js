function enviarDados() {
    const razao_social = document.getElementById("razao_social").value;
    const nome_fantasia = document.getElementById("nome_fantasia").value;
    const cnpj = document.getElementById("cnpj").value;
    const telefone = document.getElementById("telefone").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const cep = document.getElementById("cep").value;
    const email = document.getElementById("email").value;
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const dados = {
        razao_social,
        nome_fantasia,
        cnpj,
        telefone,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        email,
        login,
        senha,
    };
    console.log("Dados a serem enviados:", dados);
    // Exibir uma mensagem enquanto a solicitação está sendo processada
    alert("Enviando dados...");

    axios.post("https://volunterconnectapi.onrender.com/api/ongs", dados)
        .then(function (response) {
            // Limpar os campos do formulário
            limparCampos();

            // Exibir uma mensagem de sucesso
            alert("Cadastro realizado com sucesso!");

            // Você também pode redirecionar o usuário para outra página após o sucesso
            // window.location.href = "pagina-de-sucesso.html";
        })
        .catch(function (error) {
            if (error.response.data.errors[0].msg) {
                alert(error.response.data.errors[0].msg);
            } else {
                alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde.");
                console.error("Erro ao enviar dados:", error);
            }
        });
}

function limparCampos() {
    document.getElementById("razao_social").value = "";
    document.getElementById("nome_fantasia").value = "";
    document.getElementById("cnpj").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("email").value = "";
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
}

function enviarDados() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const nascimento = document.getElementById("nascimento").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const bairro = document.getElementById("bairro").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const cep = document.getElementById("cep").value;
    const email = document.getElementById("email").value;
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const senhaconfirm = document.getElementById("senhaconfirm").value;

    const dados = {
        nome,
        sobrenome,
        nascimento,
        rg,
        cpf,
        telefone,
        rua,
        numero,
        bairro,
        estado,
        cidade,
        cep,
        email,
        login,
        senha,
    };
    console.log("Dados a serem enviados:", dados);
    // Exibir uma mensagem enquanto a solicitação está sendo processada
    alert("Enviando dados...");

    axios.post("https://volunterconnectapi.onrender.com/api/voluntarios", dados)
        .then(function (response) {
            // Limpar os campos do formulário
            limparCampos();

            // Exibir uma mensagem de sucesso
            alert("Cadastro realizado com sucesso!");

            // Você também pode redirecionar o usuário para outra página após o sucesso
            // window.location.href = "pagina-de-sucesso.html";
        })
        .catch(function (error) {
            if(error.response.data.errors[0].msg){
                alert(error.response.data.errors[0].msg);

            }else{
                alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde.");
                console.error("Erro ao enviar dados:", error);
            }
        });
}

// Função para limpar os campos do formulário após o envio bem-sucedido
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("rg").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("email").value = "";
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
}


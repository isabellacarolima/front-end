const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if(nome === "" || nome.split(" ").length < 2) {
        alert("Por favor, insira seu nome e sobrenome.");
        return;
    }

    //validação do email
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    //validação da senha
    let senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    if(!senhaValida.test(senha)) {
        alert("A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais");
        return;
    }

    //caso tudo esteja correto
    alert("Login realizado com sucesso! Redirecionando...");

    sessionStorage.setItem("logado", "true");

    window.location.href = "painel.html";
    
    window.location.href = "index2.html";
});
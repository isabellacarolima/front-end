function login() {
    const name = ["Admin"];
    const emailInput = ["admin@gmail.com"];
    const password = ["123456"];
    
    const mensagem = document.getElementById("mensagem");
    const usuario = document.getElementById("exempleInputName1").value;
    const email = document.getElementById("exempleInputEmail1").value;
    const senha = document.getElementById("exempleInputPassword1").value;

    let correto = false;

    for(let i = 0; i<name.length; i++) {
        if(usuario === name[i] && email === emailInput[i] && senha === password[i]) { correto = true; 
            break;
        }
    }

    if(correto){
        mensagem.innerHTML = "redirecionando...";
        setTimeout(() => {
            window.location.href = "index2.html";
        }, 2000);
    } else {
        mensagem.innerHTML = "Dados incorretos, tente novamente!";
    }
}
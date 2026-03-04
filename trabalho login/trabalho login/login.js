function login() {
    const usua = ["admin"];
    const sen = ["1234"];
    
    const mensagem = document.getElementById("mensagem");
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    let correto = false;

    for(let i = 0; i<usua.length; i++) {
        if(usuario === usua[i] && senha === sen[i]) {
            correto = true;
            break; 
        }
    }

    if(correto){
        mensagem.innerHTML ="redirecioando...";
        setTimeout(() => {
            window.location.href = "login2.html";
        }, 2000);
    } else {
        mensagem.innerHTML = "Nome ou senha incorretos";
    }
}
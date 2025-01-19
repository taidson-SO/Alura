//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosConfirmados = [];
let entradaAmigos = document.querySelector('input');

function adicionarAmigos() 
{
    
    let amigo = entradaAmigos.value;
    
    if (amigo == "")
    {
        alert("Digite o nome do amigo"); 
    } 
    else 
    {
        if(!amigosConfirmados.includes(amigo))
        {
            amigosConfirmados.push(amigo);
            alert("Amigo adicionado com suscesso!!!");
        
        } 
        else 
        {
            let opcao = prompt("Este amigo já havia confirmado, gostaria de adiciona-lo novamente? \n \
                Digite: \n 1 - Adicionar \n 2 - Cancelar");
                
                if(opcao == 1)
                {
                    amigosConfirmados.push(amigo);
                    alert("Amigo adicionado com suscesso");
                } 
                else 
                {
                    alert("Amigo não adicionado!");
                }
        }
    } 
    entradaAmigos.value = "";

    exibirListaDeAmigos();
}



function exibirListaDeAmigos()
{
    let mostradoramigos = document.getElementById("listaAmigos");

    mostradoramigos.innerHTML = "";

    amigosConfirmados.forEach
    (
        amigo => 
        {
            let participante = document.createElement('li');
            participante.textContent = amigo;
            mostradoramigos.appendChild(participante);
        }
    );
}

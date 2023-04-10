const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar= document.querySelector('.btn-voltar');
const cartaoCavaleiros=document.querySelectorAll('.cartao');
let cardAtual = 0;

setaAvancar.addEventListener('click', () => {
    console.log('cardAtual',cardAtual);
    console.log("cartoes",cartaoCavaleiros.length -1);

     
    if(cardAtual === cartaoCavaleiros.length -1) return;
    
    console.log('blá')

    cardAtual++;
    console.log(cartaoCavaleiros[cardAtual].classList.add('selecionado'));

    const cartaoEscolhido = document.querySelector('.selecionado');
    cartaoEscolhido.classList.remove('selecionado')
    console.log(cartaoEscolhido);
})

setaVoltar.addEventListener('click', ()=> {

    if(cardAtual === 0) return;
    
 

    const cartaoEscolhido = document.querySelector('.selecionado');
    cartaoEscolhido.classList.remove('selecionado')
    console.log(cartaoEscolhido);
    
    cardAtual--;
    console.log(cardAtual);
    cartaoCavaleiros[cardAtual].classList.add("selecionado");

})
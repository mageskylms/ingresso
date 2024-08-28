//pega quantidade de ingressos por tipo
let superior = parseInt(document.getElementById('qtd-superior').textContent);
let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    //proteção que verifica quantidade
    let quantidade = document.getElementById('qtd').value;
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('O campo "quantidade" está vazio, ou tem um termo inválido.');
        return;
    }
    //pega valores dos inputs
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    }
    if (tipoIngresso == 'inferior') {
        comprarInferior(quantidade);
    }
    if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    }
}

function comprarPista(qtd) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (pista == 0){
        alert(`Não há mais disponibilidade para esse ingresso.`);
        return;
    }
    if (pista < qtd) {
        alert(`Não há disponibilidade de ${qtd} ingressos. Restam somente ${pista}. Tente outra quantidade ou ingresso.`);
    } else { 
        pista = pista - qtd;
        document.getElementById('qtd-pista').textContent = pista;
        alert(`Foram comprado(s) ${qtd}, da PISTA, com sucesso!`);
    }
}
function comprarSuperior(qtd) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (superior == 0){
        alert(`Não há mais disponibilidade para esse ingresso.`);
        return;
    }
    if (superior < qtd) {
        alert(`Não há disponibilidade de ${qtd} ingressos. Restam somente ${superior}. Tente outra quantidade ou ingresso.`);
    } else { 
        superior = superior - qtd;
        document.getElementById('qtd-superior').textContent = superior;
        alert(`Foram comprado(s) ${qtd}, da SUPERIOR, com sucesso!`);
    }
}

function comprarInferior(qtd) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (inferior == 0){
        alert(`Não há mais disponibilidade para esse ingresso.`);
        return;
    }
    if (inferior < qtd) {
        alert(`Não há disponibilidade de ${qtd} ingressos. Restam somente ${inferior}. Tente outra quantidade ou ingresso.`);
    } else { 
        inferior = inferior - qtd;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert(`Foram comprado(s) ${qtd}, da INFERIOR, com sucesso!`);
    }
}
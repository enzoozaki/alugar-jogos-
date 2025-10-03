function alterarStatus (id) {
    
    let item = document.getElementById(`game-${id}`);


    let botao = item.querySelector('.dashboard__item__button');

    let imgConteiner = item.querySelector('.dashboard__item__img');


    if(botao.textContent === 'Alugar') {
       
        botao.textContent = 'Devolver';


        botao.style.backgroundColor = 'black';
        botao.style.color = 'white';


        imgConteiner.classList.add('dashboard__item__img--rented');
    
    } else {
       
        let confirmacao = confirm('Tem certeza que deseja devolver o jogo?');
        if (!confirmacao) {
            return;
        }

        
        botao.textContent = 'Alugar';


        botao.style.backgroundColor = '#505EFF';
        botao.style.color = 'black';


        imgConteiner.classList.remove('dashboard__item__img--rented');
    }
}

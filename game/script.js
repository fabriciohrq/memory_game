const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let travaBoard = false;
let primeiroCard, segundoCard;

function flipCard(){
    if(travaBoard) return;
    if(this === primeiroCard) return;

    this.classList.add('flip');
    // console.log("Click!");
    // console.log(this);

    if(!hasFlippedCard){
        // primeiro click
        hasFlippedCard = true;
        primeiroCard = this;

        return;
    }
    
        // segundo click
        segundoCard = this;

        validaMatch();
}

// condition ? exp1 (true) : exp2 (false)

function validaMatch(){
    let deuMatch = primeiroCard.dataset.framework === segundoCard.dataset.framework;
    // match
    console.log(primeiroCard.dataset.framework);
    console.log(segundoCard.dataset.framework);

    deuMatch ? congelaCards() : reiniciaCards();

    // if(deuMatch){
    //     // deu match
    //     congelaCards();
    // } else{
    //     // não deu match
    //     reiniciaCards();
    // }

    console.log('Função executada');
}

function congelaCards(){
    primeiroCard.removeEventListener('click', flipCard);
    segundoCard.removeEventListener('click', flipCard);

    reiniciaBoard();
}

function reiniciaCards(){
    travaBoard = true;

    setTimeout(() => {
        primeiroCard.classList.remove('flip');
        segundoCard.classList.remove('flip');  

        reiniciaBoard();
    }, 1000);
}

function reiniciaBoard(){
    [hasFlippedCard, travaBoard] = [false, false];
    [primeiroCard, segundoCard] = [null, null];
}

// IIFE (Immediately Invoked FUNCTION Expression) 
(function embaralhar(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        // Math.floor = retorna o menor número INTEIRO do parâmetro
        // Math.random =  retornar um número pseudoaleatório de ponto flutuante entre 0 e 1.
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let primeiroCard, segundoCard;

function flipCard(){
    this.classList.toggle('flip');
    // console.log("Click!");
    // console.log(this);

    if(!hasFlippedCard){
        // primeiro click
        hasFlippedCard = true;
        primeiroCard = this;
    } else{
        // segundo click
        hasFlippedCard = false;
        segundoCard = this;

        // match
        console.log(primeiroCard.dataset.framework);
        console.log(segundoCard.dataset.framework);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))
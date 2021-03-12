function writeCards(names, event) {
    let thankYouCards = [];

    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return thankYouCards;
}

function countDown(from) {
    while (from >= 0){
        console.log(from);
        from--;
    }
}
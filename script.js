const messages = [
    "Ne budi durdaaa?",
    "Jel si sigurna?",
    "Bas si smarac..",
    "Plzzzzz...",
    "Jos jednom razmisli",
    "Naljuticu seee.....",
    "Aloooooooo",
    "Pocinjes da me nerivars....",
    "Okeee, prestacu da te smaram",
    "Salim se, samo klini Da! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
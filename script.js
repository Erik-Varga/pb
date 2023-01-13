const quoteText = document.querySelector(".quote");
// const quoteAmount = document.querySelector(".currentQuote");

const orderSingleBtn = document.getElementById("order-single");
const cancelSingleBtn = document.getElementById("cancel-single");

const orderDoubleBtn = document.getElementById("order-double");
const orderTripleBtn = document.getElementById("order-triple");
const cancelBtn = document.getElementById("cancel");

function singleQuote() {
    quoteText.textContent = '$300 Single';
    orderSingleBtn.innerText = 'Selected';
    orderDoubleBtn.innerText = 'Select';
    orderTripleBtn.innerText = 'Select';
    cancelBtn.innerText = 'X';
    cancelBtn.style.display = 'flex';
}

function doubleQuote() {
    quoteText.textContent = '$500 Double';
    orderSingleBtn.innerText = 'Select';
    orderDoubleBtn.innerText = 'Selected';
    orderTripleBtn.innerText = 'Select';
    cancelBtn.innerText = 'X';
    cancelBtn.style.display = 'flex';
}

function tripleQuote() {
    quoteText.textContent = '$600 Triple';
    orderSingleBtn.innerText = 'Select';
    orderDoubleBtn.innerText = 'Select';
    orderTripleBtn.innerText = 'Selected';
    cancelBtn.innerText = 'X';
    cancelBtn.style.display = 'flex';
}

function cancelQuote() {
    quoteText.textContent = '$0';
    orderSingleBtn.innerText = 'Select';
    orderDoubleBtn.innerText = 'Select';
    orderTripleBtn.innerText = 'Select';
    cancelBtn.innerText = '';
    cancelBtn.style.display = 'none';
}

orderSingleBtn.addEventListener('click', singleQuote);
orderDoubleBtn.addEventListener('click', doubleQuote);
orderTripleBtn.addEventListener('click', tripleQuote);
cancelBtn.addEventListener('click', cancelQuote);
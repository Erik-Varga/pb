const quoteText = document.querySelector(".quote");
const amountText = document.getElementById('amt_user');

const orderSingleBtn = document.getElementById("order-single");
const cancelSingleBtn = document.getElementById("cancel-single");

const orderDoubleBtn = document.getElementById("order-double");
const orderTripleBtn = document.getElementById("order-triple");
const cancelBtn = document.getElementById("cancel");

function singleQuote() {
    quoteText.textContent = 'Total Pushy Price: $300';
    orderSingleBtn.innerText = 'Selected';
    orderDoubleBtn.innerText = 'Select';
    orderTripleBtn.innerText = 'Select';
    cancelBtn.innerText = 'X';
    cancelBtn.style.display = 'flex';
    amountText.value = "SinglePushy";
}

function doubleQuote() {
    quoteText.textContent = 'Total Pushy Price: $500';
    orderSingleBtn.innerText = 'Select';
    orderDoubleBtn.innerText = 'Selected';
    orderTripleBtn.innerText = 'Select';
    cancelBtn.innerText = 'X';
    cancelBtn.style.display = 'flex';
    amountText.value = "DoublePushy";
}

function tripleQuote() {
    quoteText.textContent = 'Total Pushy Price: $600';
    orderSingleBtn.innerText = 'Select';
    orderDoubleBtn.innerText = 'Select';
    orderTripleBtn.innerText = 'Selected';
    cancelBtn.innerText = 'X';
    cancelBtn.style.display = 'flex';
    amountText.value = "TriplePushy";
}

function cancelQuote() {
    quoteText.textContent = '$0';
    orderSingleBtn.innerText = 'Select';
    orderDoubleBtn.innerText = 'Select';
    orderTripleBtn.innerText = 'Select';
    cancelBtn.innerText = '';
    cancelBtn.style.display = 'none';
    amountText.value = "0";
}

orderSingleBtn.addEventListener('click', singleQuote);
orderDoubleBtn.addEventListener('click', doubleQuote);
orderTripleBtn.addEventListener('click', tripleQuote);
cancelBtn.addEventListener('click', cancelQuote);
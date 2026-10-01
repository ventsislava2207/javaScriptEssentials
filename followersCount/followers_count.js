let count = 0; // initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function increaseCount() {
    count++; // increment the count by 1
    displayCount(); // display the count
    checkCountValue(); // check count value and display messages
}

function decreaseCount() {
    count--;
    displayCount();
}

function resetCount() {
    count = 0;
    displayCount();
}
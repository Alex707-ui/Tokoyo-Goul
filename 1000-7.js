let A = 1000;
let startButton = document.querySelector('.start-button');
let goulList = document.querySelector('.goul-list');

startButton.onclick = function() {
    while (A > 0) {
        let goulListItem = document.createElement('li');
        A = A - 7;
        goulListItem.innerText = A;
        goulList.append(goulListItem);
    }
}



let dtLetters = [[
    "N", "e", "x", "t", "G", "e", "n" 
], [
    "C", "h", "e", "a", "p"
], [
    "C", "u", "s", "t", "o", "m", "i", "z", "a", "b", "l", "e"
], [
    "L", "i", "f", "e", "t", "i", "m", "e"
], [
    ""
]];

function gebi(id) {
    return document.getElementById(id);
}

let currLetter = 0;
let letterSet = 0;
function changeTitle() {
    setTimeout(() => {
        if (letterSet > 3) {
            letterSet = 0;
            currLetter = 0;
        }
        if (currLetter > dtLetters[letterSet].length - 1 || document.title == "XCheats | ") {
            currLetter = 0;
            document.title = "XCheats | ";
            letterSet++;
        }
        document.title += " " + dtLetters[letterSet][currLetter];
        currLetter++;
        changeTitle();
    }, 500);
}

changeTitle();

buyBtnState = false;
function checkBuyBtnState() {
    if (buyBtnState) {
        gebi("buy-btn").classList.add("hidden");
    } else {
        gebi("buy-btn").classList.remove("hidden");
        window.scrollBy(0, 100);
    }
    buyBtnState = !buyBtnState;
}


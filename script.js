console.log("Welcome to Tik Tac Toe")

let audioTurn = new Audio("ding.mp3")
let gameOver = new Audio("momoi.mp3")
let turn = "X"
let isgameOver = false;

const changeTurn = () => {
    return turn === "X"?"O" : "X"
}

const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won"
            isgameOver = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "150px"
            gameOver.play()
        }
    })
}


let  boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


document.getElementsByTagName("button")[0].addEventListener("click", () => {
    let boxTexts = document.getElementsByClassName("boxtext");
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
    gameOver.pause()

})
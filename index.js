let startbtn = document.querySelector('.startbtn');
let boxes = document.querySelectorAll('.box');
let Display = document.querySelector(".current_player")

init();

var current_player;
var gamegrid;
// startbtn.classList.add('active');

function init() {
    current_player = "x";
    gamegrid = ["", "", "", "", "", "", "", "", ""];
    // UI p Update
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        box.style.pointerEvents = "all";
        boxes.forEach((box)=>{
            box.classList.remove("win");
        })
    })

    Display.innerHTML = `Current-Player-${current_player}`;
    startbtn.classList.remove('active');
}
let winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function swapTurn() {
    if (current_player === "x") {
        current_player = "o";
    } else {
        current_player = "x";
    }
}



function Gameover(index) {
    let Winner = "";
    winningCondition.forEach((poistion) => {
        // all box are none empty and win some one
        if ((gamegrid[poistion[0]] !== "" || gamegrid[poistion[1]] !== "" || gamegrid[poistion[2]] !== "")
            && (gamegrid[poistion[0]] === gamegrid[poistion[1]]) && (gamegrid[poistion[1]] === gamegrid[poistion[2]])) {
            console.log(gamegrid[poistion[0]])
            console.log(gamegrid[poistion[1]])
            console.log(gamegrid[poistion[2]])

            // check there who is the Winner X or o according to position[1]
            if (gamegrid[poistion[0]] === "x") {
                Winner = "x";
            } else {
                Winner = "o"
            }
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            // color of x or o
            boxes[poistion[0]].classList.add('win');
            boxes[poistion[1]].classList.add('win');
            boxes[poistion[2]].classList.add('win');


        }

    })

    // winner show karna k liya koi win ho gya h 
    if (Winner !== "") {
        Display.innerText = `Win Match ${Winner}`;
        startbtn.classList.add("active")

    }else{

    }

    // jab match taied ho jay
    let count = 0;
    gamegrid.forEach((box) => {
        if (box !== "") {
            count++;
        }
    })

    if (count === 9) {
        Display.innerText = "match-tie"
        startbtn.classList.add('active');
    }
}


function handleClick(index) {
    if (gamegrid[index] === "") {
        boxes[index].innerHTML = `${current_player}`
        gamegrid[index] = `${current_player}`
        boxes[index].style.pointerEvents = "none";

        swapTurn();

        Gameover(index);

    }

}




boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // console.log(index);

        handleClick(index);
    })
})

startbtn.addEventListener('click', init)

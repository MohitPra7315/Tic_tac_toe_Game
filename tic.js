let Display = document.querySelector('.current_player');
let boxes = document.querySelectorAll(".box");
let GaneStartbtn = document.querySelector(".startbtn")




let currentPlayer;
let Gamegrid;

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


initisalise();


function initisalise() {

    currentPlayer = "x";
    Gamegrid = ["", "", "", "", "", "", "", "", ""]; //grid box m kaali h  
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        box.style.pointerEvents = "all";

        box.classList.remove('win');

    })
    //  UI p update karna k liya 
    Display.innerText = `Current-Player-${currentPlayer}`
    GaneStartbtn.classList.remove('active');

}
function swapTurn() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x"
    }


}

function Gameover() {

    let Winner = "";
    winningCondition.forEach((poistion) => {
        // all box are none empty and win some one
        if ((Gamegrid[poistion[0]] !== "" || Gamegrid[poistion[1]] !== "" || Gamegrid[poistion[2]] !== "")
            && (Gamegrid[poistion[0]] === Gamegrid[poistion[1]]) && (Gamegrid[poistion[1]] === Gamegrid[poistion[2]])) {



            if (Gamegrid[poistion[0]] === "x") {
                Winner = "x"
            } else {
                Winner = "o";
            }
            Display.innerText = `${currentPlayer}`;

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
        GaneStartbtn.classList.add("active");

    } else {

    }

    // jab match taied ho jay
    let count = 0;
    Gamegrid.forEach((box) => {
        if (box !== "") {
            count++;
        }
    })

    if (count === 9) {
        Display.innerText = "match-tie"

        GaneStartbtn.classList.add('active');
    }
}





boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (Gamegrid[index] === "") {
            Display.innerText = `Current-Player-${currentPlayer}`
            box.innerHTML = `${currentPlayer}`;

            Gamegrid[index] = `${currentPlayer}`;
            console.log(Gamegrid)

            boxes[index].style.pointerEvents = "none";



            // swap function of x or o
            swapTurn();


            Gameover();


        }

    })
})


GaneStartbtn.addEventListener('click', initisalise);






// let x="30";
// let X="60";
// var y="80";
// var y="40";
// const z="50";
// const Z="100";




// // console.log(X)
// // console.log(Z)

// // console.log(x)
// console.log(y)
// console.log(z)





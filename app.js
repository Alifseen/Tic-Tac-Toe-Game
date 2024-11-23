const playerTurn = document.querySelector('.turn-notification')
const error = document.querySelector('.error-notification')
const noName = document.querySelector('.name-error')
const table = document.querySelector('table')
const td = table.querySelector('td')
const startGame = document.querySelector('.start')
const game = document.querySelector('.game')
const form = document.querySelector('.entry-form')
const restart = document.querySelector('.reset')
const clearBoard = document.querySelector('.clear')
const buttons = document.querySelector('.buttons')

let player1 = document.getElementById('player-1')
let player2 = document.getElementById('player-2')

let p1 = ''
let p2 = ''

table.onclick = counter

let clickCounter = 0
let boxTracker = []



startGame.addEventListener('click', function(event){
    event.preventDefault()
    p1 = player1.value.toUpperCase()
    p2 = player2.value.toUpperCase()
    if (p1 != "" && p2 != ""){
    playerTurn.innerHTML = `Turn: `+p1
    form.style = `display: none;`
    game.style = `display: flex;`
    } else noName.innerHTML = 'Enter player names'
})


table.addEventListener('click', gameSequence)


function gameSequence(){
    changeTurn()
    draw()
    checkWinner()
}


function changeTurn(){
    if (playerTurn.innerHTML === `Turn: `+p1 && error.innerHTML === ``){ 
        playerTurn.innerHTML = `Turn: `+p2
    }
    else if (playerTurn.innerHTML === `Turn: `+p2 && error.innerHTML === ``) {
        playerTurn.innerHTML = `Turn: `+p1
    }
}


function changeValue(element){
    value = document.getElementById(element)
    if ((playerTurn.innerHTML === `Turn: `+p1)){
        checkBox(value)
        markX(value)
    } else {
        checkBox(value)
        markO(value)
    }
}


function rematch(){
    playerTurn.innerHTML = `Turn: `+p1
    error.innerHTML = ``
    boxTracker = []
    clickCounter = 0
    for (row of table.rows){
        for (cell of row.cells){
            cell.innerText = ""
            cell.style = 'background-color: cornflowerblue'
        }
    }
    buttons.style = `display: none;`
}


function counter(){
    clickCounter += 1
}

function markX(val){
    if (val.innerHTML === ``){
            val.innerHTML = "X"
            boxTracker += `${val.id}:X`
            val.style ='background-color: beige;'
    }
}


function markO(val){
    if (val.innerHTML === ``){
            val.innerHTML = "O"
            boxTracker += `${val.id}:O`
            val.style ='background-color: beige;'
    }
}

function checkBox(val){
    if (val.innerHTML === ``){
        error.innerHTML = ``
    } 
    else if (playerTurn.innerHTML === `DRAW!` || playerTurn.innerHTML === p1 + ` WINS!` || playerTurn.innerHTML === p2 + ` WINS!`) {
        return
    }
    else error.innerHTML = `Try another box`
}

function checkWinner(){
    if (clickCounter > 4){
        checkRow1()
        checkRow2()
        checkRow3()
        checkCol1()
        checkCol2()
        checkCol3()
        checkDiagnol1()
        checkDiagnol2()
    } 
}

function draw(){
    if (clickCounter === 9 && playerTurn.innerHTML === `Turn: `+p2){
        playerTurn.innerHTML = `DRAW!`
        buttons.style = `display: flex;`
    }
}

function checkRow1(){
    if (boxTracker.includes(`box1:X`) && boxTracker.includes(`box2:X`) && boxTracker.includes(`box3:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box1').style = 'background-color: lightgreen;'
        table.querySelector('#box2').style = 'background-color: lightgreen;'
        table.querySelector('#box3').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box1:O`) && boxTracker.includes(`box2:O`) && boxTracker.includes(`box3:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box1').style = 'background-color: lightgreen;'
        table.querySelector('#box2').style = 'background-color: lightgreen;'
        table.querySelector('#box3').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

function checkRow2(){
    if (boxTracker.includes(`box4:X`) && boxTracker.includes(`box5:X`) && boxTracker.includes(`box6:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box4').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box6').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box4:O`) && boxTracker.includes(`box5:O`) && boxTracker.includes(`box6:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box4').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box6').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}


function checkRow3(){
    if (boxTracker.includes(`box7:X`) && boxTracker.includes(`box8:X`) && boxTracker.includes(`box9:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box7').style = 'background-color: lightgreen;'
        table.querySelector('#box8').style = 'background-color: lightgreen;'
        table.querySelector('#box9').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box7:O`) && boxTracker.includes(`box8:O`) && boxTracker.includes(`box9:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box7').style = 'background-color: lightgreen;'
        table.querySelector('#box8').style = 'background-color: lightgreen;'
        table.querySelector('#box9').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

function checkCol1(){
    if (boxTracker.includes(`box1:X`) && boxTracker.includes(`box4:X`) && boxTracker.includes(`box7:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box1').style = 'background-color: lightgreen;'
        table.querySelector('#box4').style = 'background-color: lightgreen;'
        table.querySelector('#box7').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box1:O`) && boxTracker.includes(`box4:O`) && boxTracker.includes(`box7:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box1').style = 'background-color: lightgreen;'
        table.querySelector('#box4').style = 'background-color: lightgreen;'
        table.querySelector('#box7').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

function checkCol2(){
    if (boxTracker.includes(`box2:X`) && boxTracker.includes(`box5:X`) && boxTracker.includes(`box8:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box2').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box8').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box2:O`) && boxTracker.includes(`box5:O`) && boxTracker.includes(`box8:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box2').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box8').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

function checkCol3(){
    if (boxTracker.includes(`box3:X`) && boxTracker.includes(`box6:X`) && boxTracker.includes(`box9:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box3').style = 'background-color: lightgreen;'
        table.querySelector('#box6').style = 'background-color: lightgreen;'
        table.querySelector('#box9').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box3:O`) && boxTracker.includes(`box6:O`) && boxTracker.includes(`box9:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box3').style = 'background-color: lightgreen;'
        table.querySelector('#box6').style = 'background-color: lightgreen;'
        table.querySelector('#box9').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

function checkDiagnol1(){
    if (boxTracker.includes(`box1:X`) && boxTracker.includes(`box5:X`) && boxTracker.includes(`box9:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box1').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box9').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box1:O`) && boxTracker.includes(`box5:O`) && boxTracker.includes(`box9:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box1').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box9').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

function checkDiagnol2(){
    if (boxTracker.includes(`box3:X`) && boxTracker.includes(`box5:X`) && boxTracker.includes(`box7:X`)){
        playerTurn.innerHTML = p1 + ` WINS!`
        table.querySelector('#box3').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box7').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    }
    else if (boxTracker.includes(`box3:O`) && boxTracker.includes(`box5:O`) && boxTracker.includes(`box7:O`)){
        playerTurn.innerHTML = p2 + ` WINS!`
        table.querySelector('#box3').style = 'background-color: lightgreen;'
        table.querySelector('#box5').style = 'background-color: lightgreen;'
        table.querySelector('#box7').style = 'background-color: lightgreen;'
        buttons.style = `display: flex;`
    } else return
}

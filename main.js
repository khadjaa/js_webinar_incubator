// const userName = "Bobs"
// let age = 23

// if(userName === "Bob"){
//     alert(`Hello, ${userName}`)
// } else {
//     alert(`I don't know you`)
// }

// for (let index = 0; index < 3; index++){
//     alert(index)
// }

// const array = ["a", "b", "c"]
// alert(array[0])

// const user = {
//     name: "Bob",
//     age: 24
// }
// alert(user.name)

// function getUser() {
//     const name = prompt("Your friends name")
//     const age = prompt("How old is he?")
//     if(name) {
//         alert(`Hello, ${name} !`)
//     } return (
//         {name: name, age: age}
//     )     
// }

// const itUser = getUser()
// console.log(itUser)

const settings = {
    min: 0,
    max: 100,
    attempts: 10
}

const getRandomNumber = () =>  Math.round(Math.random() * 100) 

function getUserName(params) {
    let condition = true
    let name
    while (condition) {
        name = prompt("Your name is?", "")
        if(name){
            condition = false
        } else {
            alert("Write and don't vieb")
        }
    }
    return name
}

const userName = getUserName()
const randomNumber = getRandomNumber()

function game (objSettings, number, name) {

    alert(`Hello , ${name} ! I have a number in interval from 
    ${objSettings.min} to ${objSettings.max}. You have ${objSettings.attempts}
    attempts for find. Let's go?`)

    for (let index = 0; index < objSettings.attempts; index++){
        const answer = prompt("Give your variant", "Input number")
        if(answer > number){
            alert(`My number is less. Now you have ${objSettings.attempts - index - 1} attempts`)
        } else if (answer < number){
            alert(`My number is more. Now you have ${objSettings.attempts - index - 1} attempts`)
        }
        else {
            //win
            alert("You are winner!")
            return
        }
    }
    //game over
    alert("Ooops.. You are losee :-(   Give 10$ and good luck for next time!")
}

game(settings, randomNumber, userName)
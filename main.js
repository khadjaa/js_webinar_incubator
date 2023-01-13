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

function getRandomNumber(){
    const number = Math.round(Math.random() * 100) 
    return number
}

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
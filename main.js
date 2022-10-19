//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri,
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//numeri casuali mathrandom (5 numeri)

let casualNumber = []

let numeriIndovinati = []

let time = document.querySelector(".time")

let start = document.querySelector(".start")

for (let i = 0; i < 5; i++) {
    let GenerateNumber = Math.floor(Math.random() * 100)
    casualNumber.push(GenerateNumber)
}

console.log(casualNumber);

//visualizzo i numeri in pagina

let number = document.querySelector(".number")

number.append(casualNumber)

//creo una funzione per far scomparire i numberi dopo 30s e apro un prompt


let counterTimer

//timer 30s
start.addEventListener("click",function(){
    console.log("start");
    number.classList.remove("d-none")
    let seconds = 10
    counterTimer = setInterval(function(){
        time.innerText = seconds
        seconds--
        if (seconds < 0) {
            number.classList.add("d-none")
            time.classList.add("d-none")
            clearInterval(counterTimer)
        }
    },1000)
    
    let timer = setInterval(game,12000)
        
    function game (){
        for (let i = 0; i < 5; i++) {
            let GenerateNumber = Math.floor(Math.random() * 100)
            casualNumber.push(GenerateNumber)
        }
        
        let repeteNumber = prompt("Inserisci i numeri che ti ricordi")
        console.log(repeteNumber);
        
        //il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
        clearInterval(timer)
    }
})





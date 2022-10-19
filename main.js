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
start.addEventListener("click", function () {
    console.log("start");
    //faccio comparire i numeri e i timer
    number.classList.remove("d-none")
    time.classList.remove("d-none")
    //genera timer e fa comparire i numeri
    let seconds = 2
    counterTimer = setInterval(function () {
        time.innerText = seconds
        seconds--
    //nasconte in testo  
        if (seconds < 0) {
            number.classList.add("d-none")
            time.classList.add("d-none")
    //ritarda il prompt di 1sec
            let slowPrompt = setInterval(function () {
                generateMarkUp(0, 5)
                clearInterval(slowPrompt)
            }, 1000)
            clearInterval(counterTimer)
        }
    }, 1000)

})

//Dopo che sono stati inseriti i 5 numeri,
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.
let numberText = []

let conteggio = 0

let counter = document.querySelector(".counter")

let ul = document.querySelector("ul")

function generateMarkUp(min, max) {
    for (let i = min; i < max; i++) {
        const repeteNumber = Number(prompt("Scrivi i tuoi numeri"))
        numberText.push(repeteNumber)
        //console.log(numberText);
    }
    for (let i = min; i < casualNumber.length; i++) {
        const element = casualNumber[i];
        const secondElement = numberText[i];
        //console.log(element, "numero generato casuale");
        //console.log(secondElement, "numeri prompt");
        if (casualNumber.includes(numberText[i])) {
            conteggio++
            //console.log(numberText[i]);
            //console.log(conteggio,"io sono il conteggio");
            counter.innerHTML = conteggio //punti utente
            const li = document.createElement("li")
            ul.append(li)
            li.append(numberText[i])
        }
    }
}







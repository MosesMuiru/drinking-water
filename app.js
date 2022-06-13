const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained  = document.getElementById("remained")

updateBigCup()

smallCups.forEach(  
    (cup,index) => {
        cup.addEventListener("click", ()=> highlightcups(index))
    }
)
// this the function that fills up the empty cups

function highlightcups(index) {

    if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index-- 

    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= index){
            cup.classList.add("full")
        }
        else cup.classList.remove("full")
    })
    updateBigCup()
}

// the big cup or jag
function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length
    const totalCups = smallCups.length

    if(fullCups == 0){
        percentage.style.visibility = "hidden"
        percentage.style.height = 0
    }

    else {
        percentage.style.visibility = "visible";
        // percentage.style.background = "blue";
        percentage.style.height = `${fullCups / totalCups * 330}px`;

        percentage.innerText = `${fullCups/ totalCups*100} % `;
    }
    // console.log(fullCups)
    if(fullCups === totalCups){
        remained.style.visibility =" hidden"
        remained.style.height = 0
    }
    else{
        remained.style.visibility = "visible"
        liters.innerText = `${2-250 * fullCups / 1000 }L`
    }
}
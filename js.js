var tileA = 2
var tileB = 4
var tileC = 1
var tileD = 4
var tileE = 5
var tileF = 2
var tileG = 1
var tileH = 3
var tileI = 2
var tileJ = 3
var tileK = 3
var tileL = 3
var tileM = 2
var tileN = 3
var tileO = 2
var tileP = 3
var tileQ = 1
var tileR = 3
var tileS = 2
var tileT = 1
var tileU = 8
var tileV = 9
var tileW = 4
var tileX = 1

function updateDisplay(tileName){
    document.getElementById(tileName).innerHTML = (window[tileName])
}

function valueCheck(x, y) {
    console.log(x)
    if (x<1) {
        queryVar = "." + y
        document.querySelector(queryVar).style.opacity = "25%"
    }
    else if (x>0) {
        queryVar = "." + y
        document.querySelector(queryVar).style.opacity = "100%"
    }
}

$(".add").on("click", function(){
    (window[this.value])++
    valueCheck((window[this.value]), this.value)
    updateDisplay(this.value)
})

$(".subtract").on("click", function(){
    (window[this.value])--
    updateDisplay(this.value)
    valueCheck((window[this.value]), this.value)
})
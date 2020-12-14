// TITLE
document.getElementById("eventOneName").addEventListener("click", popUpOne)
document.getElementById("eventTwoName").addEventListener("click", popUpTwo)
document.getElementById("eventThreeName").addEventListener("click", popUpThree)
document.getElementById("eventFourName").addEventListener("click", popUpFour)
document.getElementById("eventFiveName").addEventListener("click", popUpFive)
document.getElementById("eventSixName").addEventListener("click", popUpSix)
document.getElementById("eventSevenName").addEventListener("click", popUpSeven)
document.getElementById("eventEightName").addEventListener("click", popUpEight)
document.getElementById("eventNineName").addEventListener("click", popUpNine)
document.getElementById("eventTenName").addEventListener("click", popUpTen)
document.getElementById("eventElevenName").addEventListener("click", popUpEleven)

function popUpOne () {
    document.getElementById("eventOneDescription").classList.toggle("hide")
}

function popUpTwo () {
    document.getElementById("eventTwoDescription").classList.toggle("hide")
}

function popUpThree () {
    document.getElementById("eventThreeDescription").classList.toggle("hide")
}

function popUpFour () {
    document.getElementById("eventFourDescription").classList.toggle("hide")
}

function popUpFive () {
    document.getElementById("eventFiveDescription").classList.toggle("hide")
}

function popUpSix () {
    document.getElementById("eventSixDescription").classList.toggle("hide")
}

function popUpSeven () {
    document.getElementById("eventSevenDescription").classList.toggle("hide")
}

function popUpEight () {
    document.getElementById("eventEightDescription").classList.toggle("hide")
}

function popUpNine () {
    document.getElementById("eventNineDescription").classList.toggle("hide")
}

function popUpTen () {
    document.getElementById("eventTenDescription").classList.toggle("hide")
}

function popUpEleven () {
    document.getElementById("eventElevenDescription").classList.toggle("hide")
}

document.getElementById("backBTN").addEventListener("click", hidePopUp)
document.getElementById("backBTN2").addEventListener("click", hidePopUp)
document.getElementById("backBTN3").addEventListener("click", hidePopUp)
document.getElementById("backBTN4").addEventListener("click", hidePopUp)
document.getElementById("backBTN5").addEventListener("click", hidePopUp)
document.getElementById("backBTN6").addEventListener("click", hidePopUp)
document.getElementById("backBTN7").addEventListener("click", hidePopUp)
document.getElementById("backBTN8").addEventListener("click", hidePopUp)
document.getElementById("backBTN9").addEventListener("click", hidePopUp)
document.getElementById("backBTN10").addEventListener("click", hidePopUp)
document.getElementById("backBTN11").addEventListener("click", hidePopUp)

function hidePopUp() {
    document.getElementById("eventOneDescription").classList.add("hide")
    document.getElementById("eventTwoDescription").classList.add("hide")
    document.getElementById("eventThreeDescription").classList.add("hide")
    document.getElementById("eventFourDescription").classList.add("hide")
    document.getElementById("eventFiveDescription").classList.add("hide")
    document.getElementById("eventSixDescription").classList.add("hide")
    document.getElementById("eventSevenDescription").classList.add("hide")
    document.getElementById("eventEightDescription").classList.add("hide")
    document.getElementById("eventNineDescription").classList.add("hide")
    document.getElementById("eventTenDescription").classList.add("hide")
    document.getElementById("eventElevenDescription").classList.add("hide")
}
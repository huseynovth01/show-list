var historyText = document.querySelector(".history-text")
var visionText = document.querySelector(".vision-text")
var goalsText = document.querySelector(".goals-text")

var btnHistory = document.getElementById("history-tab")
var btnVision = document.getElementById("vision-tab")
var btnGoals = document.getElementById("goals-tab")

btnHistory.addEventListener("click" , function(){
  historyText.classList.remove("hidden")
  visionText.classList.add("hidden")
  goalsText.classList.add("hidden")

})

btnVision.addEventListener("click" , function(){
  visionText.classList.remove("hidden")
  historyText.classList.add("hidden")
  goalsText.classList.add("hidden")

})


btnGoals.addEventListener("click" , function(){
  goalsText.classList.remove("hidden")
  historyText.classList.add("hidden")
  visionText.classList.add("hidden")


})
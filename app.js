const switchBtnEl = document.querySelector(".mode-switch");

const bodyEl = document.body;

function toggleMode () {
  switchBtnEl.addEventListener("click", function(){
    bodyEl.classList.toggle("dark-theme");
})};


toggleMode();



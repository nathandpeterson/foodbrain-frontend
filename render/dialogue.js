
function success(){
  let container = document.querySelector('.button-container')
  container.innerHTML += `<div class="dialogue-container"><h2 class="dialogue">Success!</h2></div>`
  window.setTimeout(clearSuccess, 1500)
}

function clearDialogue(){
  document.querySelector('.button-container').innerHTML = ''
}

function emptyFoodFields(){
  let container = document.querySelector('.button-container')
  container.innerHTML += `<div class="dialogue-container"><br><h2 class="dialogue-empty">You must enter food name and food category.</h2></div>`
  window.setTimeout(clearDialogue, 1500)
}

function emptyRecipeFields(){
  let container = document.querySelector('.button-container')
  container.innerHTML += `<div class="dialogue-container"><br><h2 class="dialogue-empty">You must enter recipe name and instructions.</h2></div>`
  window.setTimeout(clearDialogue, 1500)
}

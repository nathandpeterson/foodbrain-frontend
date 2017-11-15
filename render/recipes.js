const showRecipes = {
  all(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    data.forEach(recipe => {
      let card = showRecipe(recipe)
      cardContainer.innerHTML += card
    })
  },
  one(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    let card = showOneRecipe(data)
    cardContainer.innerHTML = card
    cardContainer.innerHTML += cardButtons(data.id)
    activateButtons.recipeUpdateActions()
  },
  clear(){
    document.querySelector('.food-cards').innerHTML = ''
    document.querySelector('.button-container').innerHTML = ''
    document.querySelector('.create-button').innerHTML = ''
  }
}

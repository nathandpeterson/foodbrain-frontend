const showRecipes = {
  all(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    data.forEach(recipe => {
      let card = showRecipe(recipe)
      cardContainer.innerHTML += card
    })
    this.buildAddRecipeBtn()
    activateButtons.recipes()
  },
  one(recipe){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    let card = showOneRecipe(recipe)
    cardContainer.innerHTML = card
    cardContainer.innerHTML += cardButtons(recipe.id)
    activateButtons.recipeUpdateActions()
    req.searchAvailableFood(recipe.ingredients)
  },
  clear(){
    document.querySelector('.food-cards').innerHTML = ''
    document.querySelector('.button-container').innerHTML = ''
    document.querySelector('.create-button').innerHTML = ''
  },
  highlightIngredients(matches){
    matches.forEach(match => {
      let ingredient = document.querySelector(`#ingredient${match[0].id}`)
      ingredient.style.color = 'yellow'
    })
  },
  buildAddRecipeBtn() {
    document.querySelector('.create-button').innerHTML +=
    `<button class="btn btn-lg btn-primary btn-block recipe-create-btn">Add Recipe</button>
    <button class="btn btn-lg btn-light btn-block home-btn">Go Back to Main Page</button>
    <br>
    `
    activateButtons.createRecipe()
    activateButtons.home()
  }
}

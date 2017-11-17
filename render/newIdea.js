
const ideas = {
  getFoods(){
    req.getAllFoods(false)
  },
  randomFood(foods){
    let randomFoodIndex = Math.ceil(Math.random() * foods.length)
    let randomFoodName = foods[randomFoodIndex].name
    this.showRandomFood(foods[randomFoodIndex])
    req.forkReq(randomFoodName)
  },
  showRandomFood(food){
    let container = document.querySelector('.card-deck')
    showFoods.clear()
    container.innerHTML = ideaCard(food)
  },
  showRecipes(recipes){
    let container = document.querySelector('.card-deck')
    let threeRecipes = recipes.filter((rec, idx) => idx < 3)
    threeRecipes.forEach(recipe => {
      let card = recipeIdeas(recipe)
      container.innerHTML += card
    })
  }
}

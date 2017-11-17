
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
    !recipes ? this.getFoods() : null
    let container = document.querySelector('.card-deck')
    let threeRecipes = recipes.filter((rec, idx) => idx < 3)
    threeRecipes.forEach(recipe => {
      let card = recipeIdeas(recipe)
      container.innerHTML += card
    })
    this.buildButtons()
  },
  buildButtons(){
    document.querySelector('.create-button').innerHTML +=
    `<button class="btn btn-lg btn-primary btn-block more-ideas-btn">More Ideas</button>
    <button class="btn btn-lg btn-light btn-block home-btn">Go Back to Main Page</button>
    <br>
    `
    activateButtons.home()
    this.activateMoreIdeasBtn()
  },
  activateMoreIdeasBtn(){
    document.querySelector('.more-ideas-btn').addEventListener('click', (e) =>{
      e.preventDefault()
      this.getFoods()
    })
  }
}

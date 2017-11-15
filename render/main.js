const mainButtons = {
  build(){
    showFoods.clear()
    document.querySelector('.button-container').innerHTML = buildMainButtons()
    this.activate()
  },
  activate(){
    document.querySelector('.show-foods').addEventListener('click', (e) => {
      e.preventDefault()
      req.getAllFoods()
    })
    document.querySelector('.show-recipes').addEventListener('click', (e) => {
      e.preventDefault()
      req.getAllRecipes()
    })
    document.querySelector('.ideas').addEventListener('click', (e) => {
      e.preventDefault()
      //recipe ideas....
    })
  }
}

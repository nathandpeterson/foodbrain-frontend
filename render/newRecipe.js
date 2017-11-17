
const newRecipe = {
  displayNew(data){
    let container = document.querySelector('.create-button')
    container.innerHTML = `
    <div class="row">
        <div class="col-6">
          <div class="recipe-card" id="display-new-recipe">
            <div class="card recipe-reference">
            <h4 class="card-name">${data.name}</h4>
            <h4 class="card-prep">${data.prep_time}</h4>
            <p class="instructions">${data.instructions}<p>
            <p class="instructions">${data.recipe_category}<p>
            <p class="instructions">${data.notes || ''}<p>
            <ul class="list-group ingredient-list">
            </ul>
          </div>
        </div>
      </div>
          <br>
        <div class="col-6" id="ingredient-form"></div>
          `
    buildIngredientForm()
    this.activateIngredientForm(data)
  },
  activateIngredientForm(recipeData){
    let submit = document.querySelector('#submit-new-ingredient')
    submit.addEventListener('click', (e) => {
      e.preventDefault()
      let ingredientData = this.collectIngredeintData()
      recipeData.ingredient = ingredientData
      req.addIngredient(recipeData)
      this.updateRecipe(ingredientData)
    })
  },
  collectIngredeintData(){
    let data = {}
    let name = document.querySelector('#ingredient-name').value
    let quantity = document.querySelector('#quantity-name').value
    data.name = name
    data.quantity = quantity
    name.value = ''
    quantity.value = ''
    return data
  },
  updateRecipe(ingredient){
    let container = document.querySelector('.ingredient-list')
    container.innerHTML += `<li class="list-group-item">${ingredient.quantity} ${ingredient.name}</li>`
    document.querySelector('#ingredient-name').value = ''
    document.querySelector('#quantity-name').value = ''
  }
}

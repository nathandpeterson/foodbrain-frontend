
const newRecipe = {
  displayNew(data){
    let container = document.querySelector('.create-button')
    container.innerHTML = `
    <div class="row">
        <div class="col-6">
          <div class="recipe-card">
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
    this.activateIngredientForm()
  },
  activateIngredientForm(){
    let submit = document.querySelector('#submit-new-ingredient')
    submit.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('clicked!')
    })
  }
}

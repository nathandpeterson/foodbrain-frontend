
function showRecipe(data){
  return `<div class="card recipe-card">
      <div class="card-body">
        <h4 class="card-name">${data.name}</h4>
        <h4 class="card-prep">${data.prep_time}</h4>
        <p class="instructions">${data.instructions}<p>
        <a id="${data.id}" href="#" class="btn btn-light recipe-data">See All Ingredients</a>
      </div>
    </div>`
}

function showOneRecipe([recipeData, allIngredientNames, allIngredients]){
  allIngredients = allIngredients.filter(ing => ing.recipe_id == recipeData.id)
  let ingList = allIngredients.map(ing => {
    let ingName = allIngredientNames.find(ingName => ingName.id == ing.ingredient_id)
    ing.name = ingName.name
  })
  let card = `<div class="card recipe-card">
      <div class="card-body">
        <h4 class="card-name">${recipeData.name}</h4>
        <h4 class="card-prep">${recipeData.prep_time}</h4>
        <p class="instructions">${recipeData.instructions}<p>
        <ul> Ingredients`
  allIngredients.forEach(ingredient => {
    card += `<li id="ingredient${ingredient.ingredient_id}">${ingredient.quantity} ${ingredient.name}</li>`
    })
    card += `</ul></div></div>`
    req.searchFood()
    return card
}

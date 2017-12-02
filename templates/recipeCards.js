
function showRecipe(data){
  let card = `<div class="card recipe-card">
      <div class="card-body">
        <h4 class="card-name">${data.name}</h4>
        <h4 class="card-prep">${data.prep_time}</h4>
        <p class="instructions">${data.instructions}<p>
        <a id="${data.id}" href="#" class="btn btn-light recipe-data">See All Ingredients</a>
      </div>
    </div>`
    return card
}

function showOneRecipe(recipe){
  let card = `<div class="card recipe-card">
      <div class="card-body">
        <h4 class="card-name">${recipe.name}</h4>
        <h4 class="card-prep">${recipe.prep_time}</h4>
        <p class="instructions">${recipe.instructions}<p>
        <ul class="ingredient-list"> Ingredients`
  recipe.ingredients.forEach(ingredient => {
    card += `<li id="ingredient${ingredient.ingredient_id}">${ingredient.quantity} ${ingredient.name}</li>`
    })
    card += `</ul>`
    if(recipe.notes) card += `<p class="notes">${recipe.notes}</p>`
    card += `</div></div>`
    return card
}

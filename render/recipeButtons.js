
function collectRecipeData(){
  const recipe = {}
  recipe.name = document.querySelector('#recipe-name').value
  recipe.prep_time = document.querySelector('#recipe-prep').value
  recipe.instructions = document.querySelector('#recipe-instructions').value
  recipe.yield = document.querySelector('#recipe-yield').value
  recipe.recipe_category = document.querySelector('#recipe-category').value
  recipe.notes = document.querySelector('#recipe-notes').value
  return recipe
}

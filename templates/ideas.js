function ideaCard(food){
  let image = foodImage(food)
  let ideaCard = `<div class="card each">
  <h4 class="card-title">You have ${food.name}</h4>
  <img class="card-img-top" src="${imageURL}/${image}/350x200" alt="Card image cap"> <div class="card-body">
    <a id="${food.id}" href="#" class="btn btn-light food-data">More</a>
  </div>
  </div>`
  return ideaCard
}

function recipeIdeas(recipe){
  let card = `<div class="card each">
  <h4 class="card-title">You could cook ${recipe.title}</h4>
  <div class="card-body">
    <a id="" href="${recipe.source_url}" class="btn btn-light food-data">Link to Recipe</a>
    </div>
  </div>`
  return card
}

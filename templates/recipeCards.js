
function showRecipe(data){
  return `<div class="card recipe-card">
      <div class="card-body">
        <h4 class="card-name">${data.name}</h4>
        <h4 class="card-prep">${data.prep_time}</h4>
        <p class="instructions">${data.instructions}<p>
        <ul>Ingredients
          <li>Cheese</li>
        </ul>
        <a id="${data.id}" href="#" class="btn btn-light recipe-data">More</a>
      </div>
    </div>`
}

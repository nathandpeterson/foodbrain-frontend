let imageURL = `https://source.unsplash.com/`

function showFood(data){
  let image = foodImage(data)
  return `
    <div class="card each">
      <img class="card-img-top" src="${imageURL}/${image}/350x200" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${data.name}</h4>
        <a id="${data.id}" href="#" class="btn btn-light food-data">More</a>
      </div>
    </div>`
}

function showOneFood(data){
  let image = foodImage(data)
  let perish = ''
  data.perishable ? perish = 'Perishable' : null
  return `
    <div class="card each">
      <img class="card-img-top" src="${imageURL}/${image}/350x200" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-name">${data.name}</h4>
        <p class="card-perish">${perish}</p>
      </div>
    </div>`
}

function foodImage(foodData){
  let image = ''
  switch(foodData.category){
    case 1:
      image = 'fqkrXYMosT4'
      break;
    case 2:
      image = '-gOUx23DNks'
      break;
    case 3:
      image = 'kC9KUtSiflw'
      break;
    case 4:
      image = 'KaK2jp8ie8s'
      break;
    case 5:
      image = 'FW7Amhh_B8A'
      break;
    case 6:
      image = 'RXySkOTi3kk'
      break;
    case 7:
      image = 'vA1L1jRTM70'
      break;
    default:
      image = '4_jhDO54BYg'
      break;
  }
  return image
}

function cardButtons(id){
  return `
    <div class="card update">
      <div class="card-body">
        <button id="${id}" href="#" class="btn btn-lg btn-secondary btn-block food-update-btn">Update</button>
        <button id="${id}" href="#" class="btn btn-lg btn-secondary btn-block food-delete-btn">Delete</button>
        <button id="${id}" href="#" class="btn btn-lg btn-secondary btn-block food-update-btn">Recipe Ideas</button>
        <button id="${id}" href="#" class="btn btn-lg btn-secondary btn-block food-back-btn">Back to All Foods</button>
      </div>
    </div>`
}

let imageURL = `https://source.unsplash.com/`

function showFood(data){
  let image = foodImage(data)
  return `
    <div class="card each">
      <h4 class="card-title">${data.name}</h4>
      <img class="card-img-top" src="${imageURL}/${image}/350x200" alt="Card image cap">
      <div class="card-body">

        <a id="${data.id}" href="#" class="btn btn-light food-data">More</a>
      </div>
    </div>`
}

function showOneFood(data){
  let image = foodImage(data)
  let perish = data.perishable ? 'Perishable' : ''

  return `
    <div class="card each">
      <h4 class="card-name">${data.name}</h4>
      <img class="card-img-top" src="${imageURL}/${image}/350x200" alt="Card image cap">
      <div class="card-body">
      <br>
      <p class="card-perish">${perish}</p>
      </div>
    </div>`
}

// Downloading the files locally would actually save us from having
// to write this code. Instead, each image could have the name of
// the food category.
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

function cardButtons(data){
  return `
    <div class="card update">
      <div class="card-body">
        <button id="${data.id}" href="#" class="btn btn-lg btn-secondary btn-block food-back-btn">Back to All Foods</button>
        <button id="${data.id}" href="#" class="btn btn-lg btn-secondary btn-block food-delete-btn">Delete</button>
        <button id="${data.name}" href="#" class="btn btn-lg btn-secondary btn-block recipe-ideas-btn">Ideas</button>
      </div>
    </div>`
}

function updateButton(){
  return `<button id="${id}" href="#" class="btn btn-lg btn-secondary btn-block food-update-btn">Update</button>`
}

const showFoods = {
  all(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    data.forEach(food => {
      let card = showFood(food)
      cardContainer.innerHTML += card
    })
    activateButtons.foods()
    buildCreateFoodButton()
    this.sortByButtons()
  },
  one(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    let card = showOneFood(data)
    cardContainer.innerHTML = card
    cardContainer.innerHTML += cardButtons(data.id)
    activateButtons.foodUpdateActions()
  },
  clear(){
    document.querySelector('.food-cards').innerHTML = ''
    document.querySelector('.button-container').innerHTML = ''
    document.querySelector('.create-button').innerHTML = ''
  },
  sortByButtons(){
  let container = document.querySelector('.button-container')
  container.innerHTML = sortButtons()
  }
}

let collectFoodFormData = function(){
  let data = {}
  data.name = document.querySelector('#food-name').value
  data.category = document.querySelector('#food-category').value
  data.category = Number(foodCategories(data.category))
  let perishable = document.querySelector('#food-perish').value
  perishable == 'yes' ? data.perishable = true : data.perishable = false
  return data
}

let foodCategories = function(category){
  let number = 0
  switch(category){
    case "fruit":
      number = 1
      break;
    case "vegetable":
      number = 2
      break;
    case "protein":
      number = 3
      break;
    case "dairy":
      number = 4
      break;
    case "legume":
      number = 5
      break;
    case "bread and grain":
      number = 6
      break;
    case "baking and spice":
      number = 7
      break;
    default:
      number = 99
      break;
  }
  return number
}

function sortButtons(){
  return `<br> <div class="row sort-bar">
    <div class="col-3">Oldest</div>
    <div class="col-3">Newest</div>
    <div class="col-3">Perishable</div>
    <div class="col-3">Categories</div>`
}

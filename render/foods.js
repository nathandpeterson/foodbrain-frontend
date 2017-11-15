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
  }
}

let collectFoodFormData = function(){
  let data = {}
  data.name = document.querySelector('#food-name').value
  data.category = document.querySelector('#food-category').value
  data.category = Number(foodCategories(data.category))
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

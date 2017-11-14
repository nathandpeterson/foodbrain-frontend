const showFoods = {
  all(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    data.forEach(food => {
      let card = showFood(food)
      cardContainer.innerHTML += card
    })
    activateButtons.foods()
  },
  one(data){
    this.clear()
    let cardContainer = document.querySelector('.food-cards')
    let card = showOneFood(data)
    cardContainer.innerHTML = card
    cardContainer.innerHTML += cardButtons()
    activateButtons.foodUpdateActions()
  },
  clear(){
    document.querySelector('.food-cards').innerHTML = ''
    document.querySelector('.button-container').innerHTML = ''
  }
}

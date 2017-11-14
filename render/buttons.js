let activateButtons = {
  foods(){
    let buttons = document.querySelectorAll('.food-data')
    for(let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', (e) => {
        e.preventDefault()
        req.getOneFood(e.target.id)
      })
    }
  },
  foodActions(){
    let cardContainer = document.querySelector('.food-cards')
    cardContainer += cardButtons()
  },
  foodUpdateActions(){
    let back = document.querySelector('.food-back-btn')
    back.addEventListener('click', (e) => {
    e.preventDefault()
    showFoods.clear()
    req.getAllFoods()
    })
  }
}

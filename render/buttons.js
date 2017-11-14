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
    let del = document.querySelector('.food-delete-btn')
    del.addEventListener('click', (e) => {
      e.preventDefault()
      req.dropFood(e.target.id)
      showFoods.clear()
      req.getAllFoods()
    })
  },
  create(){
  document.querySelector('.food-create-btn').addEventListener('click', (e) => {
    e.preventDefault()
    showFoods.clear()
    document.querySelector('.create-button').innerHTML = form()
    this.createActions()
    scroll(0,0)
    })
  },
  createActions(){
    let back = document.querySelector('#go-back')
    back.addEventListener('click', (e) => {
    e.preventDefault()
    showFoods.clear()
    req.getAllFoods()
    })
    let submit = document.querySelector('.submit-food')
    submit.addEventListener('click', (e) => {
      e.preventDefault()
      let data = collectFormData()
      req.addFood(data)
      req.getAllFoods()
    })
  }
}

let collectFormData = function(){
  let data = {}
  data.name = document.querySelector('#food-name').value
  data.category = document.querySelector('#food-category')
  return data
}

let buildCreateFoodButton = function() {
  document.querySelector('.create-button').innerHTML +=
  `<button class="btn btn-lg btn-primary btn-block food-create-btn">Add More Food</button>`
  activateButtons.create()
}

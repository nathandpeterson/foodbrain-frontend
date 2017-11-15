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
    let update = document.querySelector('.food-update-btn')
    update.addEventListener('click', (e) => {
        e.preventDefault()
        let data
        // console.log('update', e.target.id)
        showFoods.clear()
        //this doesn't work
        // req.getOneFood(e.target.id)
          .then(res => {
            console.log(res.data)
            // document.querySelector('.create-button').innerHTML = form()
          })
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
  home(){
    document.querySelector('.home-btn').addEventListener('click', (e) => {
      e.preventDefault()
      mainButtons.build()
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
      let data = collectFoodFormData()
      req.addFood(data)
    })
  },
  recipes(){
    let buttons = document.querySelectorAll('.recipe-data')
    for(let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', (e) => {
        e.preventDefault()
        req.getOneRecipe(e.target.id)
      })
    }
  }
}

let buildCreateFoodButton = function() {
  document.querySelector('.create-button').innerHTML +=
  `<button class="btn btn-lg btn-primary btn-block food-create-btn">Add More Food</button>
  <button class="btn btn-lg btn-light btn-block home-btn">Go Back to Main Page</button>
  `
  activateButtons.create()
  activateButtons.home()
}

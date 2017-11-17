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
    // let update = document.querySelector('.food-update-btn')
    // update.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     let data
    //     // console.log('update', e.target.id)
    //     showFoods.clear()
    //     //this doesn't work
    //     // req.getOneFood(e.target.id)
    //       .then(res => {
    //         console.log(res.data)
    //         // document.querySelector('.create-button').innerHTML = form()
    //       })
    // })
    let ideas = document.querySelector('.recipe-ideas-btn')
    ideas.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e.target)
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
  },
  createRecipe(){
    document.querySelector('.recipe-create-btn').addEventListener('click',(e) => {
      e.preventDefault()
      showFoods.clear()
      document.querySelector('.create-button').innerHTML = buildRecipeForm()
      scroll(0,0)
      document.querySelector('#recipes-home').addEventListener('click',(e) =>{
        e.preventDefault()
        mainButtons.build()
        })
      let submitButton = document.querySelector('#submit-new-recipe')
      submitButton.addEventListener('click',(e)=> {
          e.preventDefault()
          let recipe = collectRecipeData()
          req.addRecipe(recipe)
      } )
      })
  },
  recipeUpdateActions(){
    let back = document.querySelector('.food-back-btn')
    back.addEventListener('click', (e) => {
    e.preventDefault()
    showFoods.clear()
    req.getAllRecipes()
    })
    let destroy = document.querySelector('.food-delete-btn')
    destroy.addEventListener('click', (e) => {
      e.preventDefault()
      req.dropRecipe(e.target.id)
    })
  }
}

let buildCreateFoodButton = function() {
  document.querySelector('.create-button').innerHTML +=
  `<button class="btn btn-lg btn-primary btn-block food-create-btn">Add More Food</button>
  <button class="btn btn-lg btn-light btn-block home-btn">Go Back to Main Page</button>
  <br>
  `
  activateButtons.create()
  activateButtons.home()
}

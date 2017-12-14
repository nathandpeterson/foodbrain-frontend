const local = 'http://localhost:3000'
const heroku = 'https://vast-depths-23958.herokuapp.com'

const req = {
  getAllFoods(show=true){
    const getRequest = axios.get(`${heroku}/foods`)
    if(show){
      getRequest.then(res => showFoods.all(res.data))
    } else {
      getRequest.then(res => ideas.randomFood(res.data))
    }
  },
  getOneFood(id){
    axios.get(`${heroku}/foods/${id}`)
    .then(res => showFoods.one(res.data))
  },
  addFood(data){
    axios.post(`${heroku}/foods`, data)
    .then(res => this.getAllFoods())
  },
  dropFood(id){
    axios.delete(`${heroku}/foods/${id}`)
    // SUCCESS MESSAGE
    .then(res => this.getAllFoods())
  },
  updateFood(id, data){
    axios.put(`${heroku}/foods/${id}}`, data)
    .then(res => this.getAllFoods())
  },
  searchAvailableFood(recipeIngredients){
    axios.post(`${heroku}/search`, recipeIngredients)
    .then(matches => {
      console.log(matches.data)
      showRecipes.highlightIngredients(matches.data)
    })
  },
  getAllRecipes(){
    axios.get(`${heroku}/recipes`)
    .then(res => {
      showRecipes.all(res.data)
    })
  },
  getOneRecipe(id){
    axios.get(`${heroku}/recipes/${id}`)
    .then(res => {
      showRecipes.one(res.data)
    })
  },
  addRecipe(data){
    axios.post(`${heroku}/recipes`, data)
    .then(res => {
    // success message here, use res.statusText
      newRecipe.displayNew(res.data[0])
    })
  },
  dropRecipe(id){
    axios.delete(`${heroku}/recipes/${id}`)
      .then(res => {
        req.getAllRecipes()
      })
  },
  updateRecipe(id, data){
    axios.put(`${heroku}/recipes/${id}}`, data)
    .then(res => res)
  },
  addIngredient(data){
    axios.post(`${heroku}/ingredients`, data)
      .then(res => res)
  },
  forkReq(data){
    axios.get(`${heroku}/ideas/${data}`)
      .then(res => {
        res.data ? ideas.showRecipes(res.data) : ideas.getFoods()
    })
  }
}

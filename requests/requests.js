const loca = 'http://loca host:3000'
const heroku = 'https://vast-depths-23958.herokuapp.com'

const req = {
  getAllFoods(show=true){
    if(show == true){
      axios.get(`${heroku}/foods`)
        .then(res => showFoods.all(res.data))
    } else {
      axios.get(`${heroku}/foods`)
        .then(res => ideas.randomFood(res.data))
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
    // SUCCESS MESSAGE
    // UPDATE ROUTE DOES NOT WORK!!!
    .then(res => this.getAllFoods())
  },
  searchFood(ingredient){
    axios.put(`${heroku}/recipes`, ingredient)
    .then(matches => {
      matches.data.forEach(match => {
        showRecipes.highlightIngredients(match.id)
      })
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
        ideas.showRecipes(res.data)
    })
  }
}

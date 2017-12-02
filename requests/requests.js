const local = 'http://localhost:3000'
const heroku = 'https://vast-depths-23958.herokuapp.com'

const req = {
  getAllFoods(show=true){
    if(show == true){
      axios.get(`${local}/foods`)
        .then(res => showFoods.all(res.data))
    } else {
      axios.get(`${local}/foods`)
        .then(res => ideas.randomFood(res.data))
    }
  },
  getOneFood(id){
    axios.get(`${local}/foods/${id}`)
    .then(res => showFoods.one(res.data))
  },
  addFood(data){
    axios.post(`${local}/foods`, data)
    .then(res => this.getAllFoods())
  },
  dropFood(id){
    axios.delete(`${local}/foods/${id}`)
    // SUCCESS MESSAGE
    .then(res => this.getAllFoods())
  },
  updateFood(id, data){
    axios.put(`${local}/foods/${id}}`, data)
    .then(res => this.getAllFoods())
  },
  searchAvailableFood(recipeIngredients){
    axios.post(`${local}/search`, recipeIngredients)
    .then(matches => {
      console.log(matches.data)
      showRecipes.highlightIngredients(matches.data)
    })
  },
  getAllRecipes(){
    axios.get(`${local}/recipes`)
    .then(res => {
      showRecipes.all(res.data)
    })
  },
  getOneRecipe(id){
    axios.get(`${local}/recipes/${id}`)
    .then(res => {
      showRecipes.one(res.data)
    })
  },
  addRecipe(data){
    axios.post(`${local}/recipes`, data)
    .then(res => {
    // success message here, use res.statusText
      newRecipe.displayNew(res.data[0])
    })
  },
  dropRecipe(id){
    axios.delete(`${local}/recipes/${id}`)
      .then(res => {
        req.getAllRecipes()
      })
  },
  updateRecipe(id, data){
    axios.put(`${local}/recipes/${id}}`, data)
    .then(res => res)
  },
  addIngredient(data){
    axios.post(`${local}/ingredients`, data)
      .then(res => res)
  },
  forkReq(data){
    axios.get(`${local}/ideas/${data}`)
      .then(res => {
        res.data ? ideas.showRecipes(res.data) : ideas.getFoods()
    })
  }
}

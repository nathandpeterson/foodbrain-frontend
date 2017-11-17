const local = 'http://localhost:3000'

const req = {
  getAllFoods(){
    axios.get(`${local}/foods`)
      .then(res => showFoods.all(res.data))
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
    // SUCCESS MESSAGE
    // UPDATE ROUTE DOES NOT WORK!!!
    .then(res => this.getAllFoods())
  },
  searchFood(ingredient){
    axios.put(`${local}/recipes`, ingredient)
    .then(matches => {
      matches.data.forEach(match => {
        showRecipes.highlightIngredients(match.id)
      })
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
      .then(res => {
        console.log(res.data[0].recipe_id)
        //use recipe id to refresh the recipe on the left
      })
  },
  forkReq(data){
    axios.get(`${local}/ideas/${data}`)
      .then(res => console.log(res))
  }
}

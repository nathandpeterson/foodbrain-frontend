const local = 'http://localhost:3000'

const req = {
  getAllFoods(){
    axios.get(`${local}/foods`)
    .then(res => console.log(res))
  },
  getOneFood(id){
    axios.get(`${local}/foods/${id}`)
    .then(res => res)
  },
  addFood(data){
    axios.post(`${local}/foods`)
    .then(res => res)
  },
  dropFood(id){
    axios.delete(`${local}/foods/${id}`)
    .then(res => res)
  },
  updateFood(id, data){
    axios.put(`${local}/foods/${id}}`, data)
    .then(res => res)
  },
  getAllRecipes(){
    axios.get(`${local}/recipes`)
    .then(res => res)
  },
  getOneRecipe(id){
    axios.get(`${local}/recipes/${id}`)
    .then(res => res)
  },
  addRecipe(data){
    axios.post(`${local}/recipes`, data)
    .then(res => res)
  },
  dropRecipe(id){
    axios.delete(`${local}/recipes/${id}`)
  },
  updateRecipe(id, data){
    axios.put(`${local}/recipes/${id}}`, data)
    .then(res => res)
  }
}

function buildRecipeForm(){
  let form = `<form>
      <label for="recipe-name">recipe name</label>
      <input required type="text" id="recipe-name" class="form-control">
      <label for="recipe-prep">prep time</label>
      <input required type="text" id="recipe-prep" class="form-control">
      <label for="recipe-instructions">instructions</label>
      <textarea required type="text" id="recipe-instructions" class="form-control" rows="5"></textarea>
      <label for="recipe-yield">yield</label>
      <input type="text" id="recipe-yield" class="form-control">
      <br>
      <label for="recipe-category">recipe category</label>
      <select required id="recipe-category" class="form-control">
        <option></option>
        <option>breakfast</option>
        <option>lunch</option>
        <option>snack</option>
        <option>dinner</option>
        <option>dessert</option>
        <option >other</option>
      </select>
      <label for="recipe-notes">notes <em>optional</em></label>
      <input type="text" id="recipe-notes" class="form-control">
      <br>
      <button id="submit-new-recipe" class="btn btn-block btn-primary">submit</button>
      <button id="recipes-home" class="btn btn-block btn-light">go back</button>
    </form>
    <br>`
    return form
}

function buildIngredientForm(){
  let form = `<form></form>`
  return form
}

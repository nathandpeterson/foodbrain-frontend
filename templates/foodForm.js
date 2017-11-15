function form(data='') {
  let form = ` <form>
      <label for="food-name">food name</label>
      <input required type="text" id="food-name" class="form-control">
      ${data.name}
      </input>
      <label for="food-category">category</label>
      <select id="food-category" class="form-control">
        <option>fruit</option>
        <option>vegetable</option>
        <option>protein</option>
        <option>dairy</option>
        <option>legume</option>
        <option>bread and grain</option>
        <option>baking and spices</option>
        <option >other</option>
      </select>
      <br>
      <div class="container">
        <div class="update-row">
          <button id="go-back" type="button" class="btn btn-lg btn-warning">Go Back</button>
          <button id="" type="button" class="btn btn-lg btn-primary submit-food"> Submit </button>
        </div>
      </div>
    </form>
    `
    return form
}

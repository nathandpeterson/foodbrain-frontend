function form(data='') {
  let form = ` <form>
      <label for="food-name">food name</label>
      <input required type="text" id="food-name" class="form-control">
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
      <label for="food-perish">perishable?</label>
      <select id="food-perish" class="form-control">
        <option>yes</option>
        <option>no</option>
      </select>
      <div class="container">
        <div class="update-row">
          <button id="go-back" type="button" class="btn btn-lg btn-warning">Go Back</button>
          <button id="" type="button" class="btn btn-lg btn-primary submit-food"> Submit </button>
        </div>
      </div>
    </form>
    <br>`
    return form
}

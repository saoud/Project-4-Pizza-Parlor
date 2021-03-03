function Pizza(size) {
    this.size = size;
    this.toppings = {};
  }
  
  function Topping(name,price) {
    this.name = name;
    this.price = price;
  }
  
  Pizza.prototype.addTopping = function(topping) {
    this.toppings[topping.name] = topping;
  }
  
  Pizza.prototype.pizzaPrice = function() {
    let total = 2;
    if (this.size === "small") {
      total += 10;
    } else if (this.size === "medium") {
      total += 12;
    } else if (this.size === "large") {
      total += 14;
  }
};
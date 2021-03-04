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

$(document).ready(function() {
  $("form#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza($("#size").val())
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      let toppingString = $(this).val().toString();
      const toppingArray = toppingString.split(",");
      let newTopping = new Topping(toppingArray[0],parseFloat(toppingArray[1]));
      pizza.addTopping(newTopping);      
    });
  });
})
$(document).ready(function() {
  $('.order').click(function(event) {
    event.preventDefault();
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    alert(total);
  });
  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide()

  $("table").show();
  $(".additional-buttons").show();


  $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
  $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
  $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
  $("#total").html(total);

  function Pizza(type,size, toppings, crust, total) {
    this.type = type;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.total = total;
  }









});

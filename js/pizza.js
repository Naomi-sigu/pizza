$(document).ready(function() {
  $("#deliveryText").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $("#yes").hide();
  $("#no").hide();
  $("#grand").hide();

  // $(".additional-info .location").hide();
  $("#delivery").hide();

  $('.order').click(function(event) {
    event.preventDefault();
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var typeOfPizza = $(".type option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var grandTotal = 0;

    // $("table").show();
    // $(".additional-buttons").show();
    $("#type").html($(".type option:selected").text() + " - " + typeOfPizza);
    $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    $("#total").html(total);

    function Pizza(type, size, toppings, crust, total) {
      this.type = type;
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
    }

    $(".checkout").click(function() {
      $("#deliveryText").show();
      $(".btn.yes").show();
      $(".btn.no").show();
      $("#grand").show();

      $("#grand span").html(total);
      // grandTotal = grandTotal + total;
      //
      // $(".additional-info h3 span").html(grandTotal);
    });

    $(".yes").click(function() {
      $("#deliveryText").hide();
        $("#delivery").show();

    });

    $(".complete").click(function() {
      $("#delivery").hide();
      $(".yes").hide();
      $(".no").hide();
      $("#grand").show();
      $("#yes").show();

      $("#grand span").html(total + 250);
    });

    $(".no").click(function() {
    $("#no").show();
    $("#grand").show();
    $(".no").hide();
    $(".yes").hide();
    $("#deliveryText").hide();
    $("#grand span").html(total);
    });

  });



});

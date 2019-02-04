$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var sushi_id = $(this).children(".sushi_id").val();
    console.log(sushi_id);
    $.ajax({
      method: "PUT",
      url: "/sushis/" + sushi_id
    }).then(function(data) {
      // reload page to display devoured sushi in proper column
      location.reload();
    });

  });
});

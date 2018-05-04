function play(playerInput){
 // var numberParsed = parseInt(playerInput);
 var numberRange = [];

 for (var i = 1; i <= playerInput; i++) {
   if (i % 15 === 0) {
     numberRange.push("pingpong");

   } else if (i % 3 === 0) {
     numberRange.push("ping");
   } else if (i % 5 === 0) {
     numberRange.push("pong");
   } else {
     numberRange.push(i);
   }
 }
 return numberRange;
 // alert(numberRange);
}


$(document).ready(function(){
  $("form#ping-pong-form").submit(function(event){
    $("#mydata").empty();
    var playerInput = parseInt($("input#goal").val());
    var mm = play(playerInput);
    mm.forEach(function(newdata){
      $("#mydata").append(newdata+"</br>");
      event.preventDefault();
    });
  });
});

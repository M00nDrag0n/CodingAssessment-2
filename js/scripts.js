$(document).ready(function() {
  $("#personalityQuiz").submit(function(event) {

      event.preventDefault();

      var answers = $(this).serializeArray();

      var scores = {
        "H-W": 0,
        "H-E": 0,
        "A-W": 0,
        "A-E": 0,
      };

      for (var answer of answers){
      scores[answer.value] += 1;
      }

      //console.log(scores);
      for(var dragon in scores){
        console.log(scores[dragon]);

      }

      var maxDragon = "A-W";

      for(var dragon in scores){
        if(scores[dragon] > scores[maxDragon]){
          maxDragon= dragon;
        }
      $("#personalityQuiz").css('display', 'none');
      $(".result#"+maxDragon).css('display', 'block');
    }
  });
})

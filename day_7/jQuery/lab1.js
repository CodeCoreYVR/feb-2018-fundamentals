// https://codecore.certified.in/learning_modules/lab-jquery-lab-exercises-9/markings
//  Part 1
$('#orange-container .red.shape');
$('#green-container .medium, #green-container.small');
$('.container .shape');
$('a');
$('li a');
$('.small.blue.circle').length;

//  Part 2
$('#button-1').on('click', function(){
  $('.shape').remove();
});
$('#button-2').on('click', function(){
  $('#button-2').attr('disabled',true);
});
$('#button-3').on('click', function(){
  $('#button-message').html("button 3 was clicked");
});

//  Part 3
$('button').on('click', function(){
  $('#button-message').html(`Button ${$(this).attr('id')} was clicked`);
});

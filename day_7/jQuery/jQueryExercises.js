$('.shape').on('click', function(){
  console.log('Shape clicked');
});

$('.blue.circle').on('mouseenter', function(){
  console.log('Blue circle, go away!')
});

$('.blue.circle').on('mouseleave', function(){
  console.log('Blue Circle: Goodbye!');
});

$('tr').mouseenter(function() {
  $('tr').attr('class', 'highlight');
});

$('tr').mouseleave(function() {
  $('tr').attr('class', '');
});

$('tr').mouseenter(function() {
  $(this).attr('class', 'highlight');
});

$('tr').mouseleave(function() {
  $(this).attr('class', '');
});


$('.shape').click(function() {
  console.log($(this).attr('class'));
});

$('.shape').click(function() {
  $(this).parent().remove();
});

$('.container').click(function() {
  $(this).children().remove();
});

$(document).ready(function(){
  $('#list').click(function(event){
    event.preventDefault();
    $('#feeds .item').addClass('list-item');
    $(this).addClass('active');
    $('#grid').removeClass('active');
  });
  $('#grid').click(function(event){
    event.preventDefault();
    $('#feeds .item').removeClass('list-item');
    $(this).addClass('active');
    $('#list').removeClass('active');
  });
  //$('#grid').click(function(event){event.preventDefault();$('#feeds .item').removeClass('list-item');
});

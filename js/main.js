$(document).ready(function(){
  $('.search-input-grp input[type="text"]').on('input propertychange', function() {
    var $this = $(this);
    var visible = Boolean($this.val());
    $this.siblings('.fas').toggleClass('d-none', !visible);
  }).trigger('propertychange');

  $('.search-input-grp .fas').click(function() {
    $(this).siblings('input[type="text"]').val('')
      .trigger('propertychange').focus();
  });
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

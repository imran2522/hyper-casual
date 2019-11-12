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
  $( ".chart-toggle" ).each(function( index ) {
    $(this).click(function() {
      $( this ).closest('.item').toggleClass( "expanded" );
      if ($(this).hasClass( "fa-angle-down" )) {
        $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
      }
      else {
        $(this).removeClass('fa-angle-up').addClass('fa-angle-down');
      }
    });
  });
  $( ".chart-check" ).each(function( index ) {
    $(this).change(function () {
      $( this ).closest('.item').toggleClass( "highlight" );
    });
  });

  //$('#grid').click(function(event){event.preventDefault();$('#feeds .item').removeClass('list-item');
});

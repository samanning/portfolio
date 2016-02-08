//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready');
    
      $('#hover').hover(function() {
    //first function
        $('#hover').text('at ya girl').css('padding-left','16px').css('padding-right','16px');
  }, function() {
          //second function
    $('#hover').text('holla').css('padding-left','30px').css('padding-right','30px');
  });
})
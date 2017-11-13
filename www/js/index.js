<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	                   
function random() {
return !Math.round(Math.random());
}
	
$('#taptext').on("tap",function(){
    alert("Stop tapping!");
 }); 

$('#swipetext').on("swipeleft",function(){
    $(this).css('color', 'green');
  });   


});

$(document).ready(function() {
 
   
   $('.a, .b, .c, .d, .e, .f, .g, .h').hide(0);

   var delay = 1000*Math.random();
   setTimeout(function() {  $('.a').show(); animateDiv($('.a'), Math.round(Math.random())*2  - 1  ); }, delay);
   //animateDiv($('.a'),0);

   delay = delay + 15000*Math.random() ;
   setTimeout(function() {  $('.b').show(); animateDiv($('.b'), Math.round(Math.random())*2  - 1  ); }, delay);

   delay = delay + 15000*Math.random();
   setTimeout(function() {  $('.c').show(); animateDiv($('.c'), Math.round(Math.random())*2  - 1 ); }, delay);

   delay = delay + 15000*Math.random();
   setTimeout(function() {  $('.d').show(); animateDiv($('.d'), Math.round(Math.random())*2  - 1 ); }, delay);

   delay = delay + 15000*Math.random();
   setTimeout(function() {  $('.e').show(); animateDiv($('.e'), Math.round(Math.random())*2  - 1 ); }, delay);

   delay = delay + 15000*Math.random();
   setTimeout(function() {  $('.f').show(); animateDiv($('.f'), Math.round(Math.random())*2  - 1 ); }, delay);

   delay = delay + 15000*Math.random();
   setTimeout(function() {  $('.g').show(); animateDiv($('.g'), Math.round(Math.random())*2  - 1 ); }, delay);

   delay = delay + 15000*Math.random();
   setTimeout(function() {  $('.h').show(); animateDiv($('.h'), Math.round(Math.random())*2  - 1 ); }, delay);

});


function animateDiv($target, $tdir) {

  var oldq = $target.offset();

  var nh =  Math.floor(oldq.top  + Math.random() * window.outerHeight/3);
  var nw =  Math.floor(oldq.left + //( Math.round(Math.random())*2  - 1 )
                                   $tdir * Math.random() * (window.innerWidth/5));
  //document.getElementById("01").innerHTML = (  nw ); 
 
  var speed = calcSpeed([oldq.top, oldq.left], [nh, nw]);
  
  if ( nh < window.outerHeight){
      $target.animate({
         top: nh,
         left: nw
          }, speed*2.5, function() {
         //}, 3000, function() {
         animateDiv($target, $tdir);
      });

   }
   else{

       setTimeout(
           function() 
           {
          //do something special
        }, 3000);

       nh = 0;
       nw =   (window.outerWidth/2) +  
              ( Math.round(Math.random())*2  - 1 ) * Math.random()*(window.outerWidth/4) ;
             //+( Math.round(Math.random())*2  - 1 ) * Math.random()*(window.outerWidth/16);
    
       $target.animate({
          top: nh,
          left: nw
          }, 0, function() {
                $target.hide(0);
                setTimeout(function() {  $target.show(); animateDiv($target, ( Math.round(Math.random())*2  - 1 ) ); }, 20000*Math.random());
        });
    }

}

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

}


$(".a, .b, .c, .d, .e, .f, .g, .h").each(function(){
        
         $(this).css({"left":   (window.outerWidth/2) +  
                                ( Math.round(Math.random())*2  - 1 ) * Math.random()*(window.outerWidth/4) ,
                             // + ( Math.round(Math.random())*2  - 1 ) * Math.random()*(window.outerWidth/16) , 
                   /* "top": Math.random()* window.outerHeight */
                      "top": 0 });  /*.textillate();*/
 });


$(".a, .b, .c, .d, .e, .f, .g, .h").hover(function() {
  $(this).pause();
}, function() {
  $(this).resume();
});



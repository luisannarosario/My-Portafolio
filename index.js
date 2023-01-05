

// $('.botonF1').hover(function(){
//   $('.btn').addClass('animacionVer');
// })
// $('.contenedor').mouseleave(function(){
//   $('.btn').removeClass('animacionVer');
// })
document.addEventListener("DOMContentLoaded", function(){ 
window.scroll(function(){ 
    if (this.scrollTop() > 100) { 
        document.getElementsByClassName('.buttonF1').fadeIn(); 
    } else { 
        document.getElementsByClassName('.buttonF1').fadeOut(); 
    } 
});

$('.botonF1').click(function(){ 
    document.getElementsByTagName("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}); 

});
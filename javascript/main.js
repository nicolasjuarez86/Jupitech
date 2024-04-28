/** GLIDER CARROUSEL **/

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }      
    })
})

$('.Frontpage-estrategias').each(function(){
  if ($(this).visible()) {
    console.log('hola nico');
  } else {
    console.log('hola cami');
  }
});







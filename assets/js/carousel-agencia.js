
  var splide2 = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    arrows: true,
    pagination: true, 
    focus: 'center',
    width: '75%',
    speed: 1000,
    breakpoints: {
        768 : {
            perPage: 1,
            focus: 'center',
            width: '50%',
        },
    }
  } );
  
  splide2.mount();

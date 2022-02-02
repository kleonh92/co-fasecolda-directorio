

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    arrows: false,
    pagination: false, 
    focus: 'center',
    autoplay: true,
    speed: 3000,
    width: '70%',
    breakpoints: {
        1440 : { 
            perPage: 4,
            focus: 'center'
        },
        1024 : {
            perPage: 3,
            focus: 'center',
            width: '60%'
        },
        768 : {
            perPage: 2,
            focus: 'center',
            width: '65%',
        },
        425: {
            perPage: 1,
            focus: 'center'
        }
        

    }
    
  } );
  
  splide.mount();


  var splide2 = new Splide( '.splide-agencia', {
    type   : 'loop',
    perPage: 4,
    arrows: false,
    pagination: false, 
    focus: 'center',
    autoplay: true,
    speed: 3000,
    width: '70%',
    breakpoints: {
        1440 : { 
            perPage: 4,
            focus: 'center'
        },
        1024 : {
            perPage: 3,
            focus: 'center',
            width: '60%'
        },
        768 : {
            perPage: 2,
            focus: 'center',
            width: '65%',
        },
        425: {
            perPage: 1,
            focus: 'center'
        }
        

    }
    
  } );
  
  splide2.mount();

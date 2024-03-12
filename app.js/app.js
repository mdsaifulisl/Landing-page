var navs = document.querySelector("#nav");


document.querySelector('.responsibe').onclick = () =>{
    navs.classList.toggle('active');
    navs.classList.remove('unactive');
   
    
}

document.querySelector('#nav-h3').onclick = ()=>{
    navs.classList.toggle('unactive');
    navs.classList.remove('active');
}


window.onscroll = () =>{
    navs.classList.remove('active');
    navs.classList.remove('unactive');
    // ul_li.classList.remove('unactive');
}
/*------slider-----*/
    let currentSlide = 1;
      
    function showSlide(n) {
        const carousel = document.querySelector('.slider-start');
        const totalSlides = document.querySelectorAll('.slider-items').length;
    
        if (n > totalSlides) {
        currentSlide = 1;
        } else if (n < 1) {
        currentSlide = totalSlides;
        } else {
        currentSlide = n;
        }
    
    const translateValue = -100 * (currentSlide - 1) + '%';
    carousel.style.transform = `translateX(${translateValue})`;
    }
    
    function changeSlide(n) {
    showSlide(currentSlide += n);
    }
    
    // Initial display
    showSlide(currentSlide);
  /*------ end-----*/
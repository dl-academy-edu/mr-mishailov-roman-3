//Swiper slider

(function(){
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
})();

//skils progress animation

(function(){
  let listProcent = document.querySelectorAll('.procent_js');
  let fillProcent = document.querySelectorAll('.fill_js');

  let counter= makeCounter();

  window.addEventListener('scroll', startProcent);

  function startProcent () {

    if (window.pageYOffset>1000) {
      window.removeEventListener('scroll', startProcent);
      let timer = setInterval(start, 50);

      function start () {

        let procent = counter();
        changeHtml(procent);
        changeCss(procent);

        if (procent>=100) {
          return clearTimeout(timer);
          }
        }
    
    }
  }

  function makeCounter (){
    let i=0;
    return function() {
      return i++;
    }
  }
  
  function changeHtml (procent) {
    for (elem of listProcent) {
      elem.textContent = procent+'%';
    }
  }

  function changeCss (procent) {
    for (elem of fillProcent) {
      elem.style.width = procent+'%';
    }
  }

})();

// First slider
(function(){
  const wrapper = document.querySelector ('.slider__container');
  const innerWrapper = wrapper.querySelector ('.slider__box');
  const buttonNext = document.querySelector('.buttonNext_js');
  const buttonPrev = document.querySelector('.buttonPrev_js');
  const pagination = document.querySelector ('.slider__pagination');
  const slides = [...document.querySelectorAll('.slider__slide')];

innerWrapper.style


  let activeSlide = 0;
  let animTime = 500;
  let wightSlide = 0;
  let timerId = null;
  let dots =[];
  
  function setSlidewight() {
    wightSlide = wrapper.clientWidth;
    
    for (let slide of slides) {
      slide.style.width = `${wightSlide}px`
    }
  }
  function setActiveSlide (index, playAnimation = true) {
    if (index < 0 || index >= slides.length) {
      return
    }

    if(playAnimation) {
      animation(animTime);
    }


    dots[activeSlide].classList.remove('slider__dot_active');
    dots[index].classList.add('slider__dot_active');
 


    if (index === 0) {
      buttonPrev.classList.add('slider__button_disabled');
      buttonPrev.classList.remove('slider__button_hover');
    }
    else {
      buttonPrev.classList.remove('slider__button_disabled');
      buttonPrev.classList.add('slider__button_hover');

    }

    if (index >= slides.length-1) {
      buttonNext.classList.add('slider__button_disabled');
      buttonNext.classList.remove('slider__button_hover');
    }
    else {
      buttonNext.classList.remove('slider__button_disabled');
      buttonNext.classList.add('slider__button_hover');
    }

    innerWrapper.style.transform = `translateX(-${wightSlide * index}px)`;
    activeSlide=index;
  }

  function createPagination () {
    for (let i =0; i < slides.length; i++) {
      let dot = createDot(i);
      pagination.insertAdjacentElement('beforeend', dot);
      dots.push(dot);
    }
  }

  function createDot(index) {
    let dot = document.createElement('button');
    dot.classList.add('slider__dot');
    dot.addEventListener('click',function () {
      setActiveSlide(index);
    })
    return  dot;
  }


  buttonNext.addEventListener('click', function () {
    setActiveSlide(activeSlide + 1);
  })

  buttonPrev.addEventListener('click', function () {
    setActiveSlide(activeSlide - 1);
  })

  function animation (duration) {
    clearTimeout (timerId);
    innerWrapper.style.transition = `transform ${duration}ms`
    timerId = setTimeout (function () {
      innerWrapper.style.transition='';
    }, duration)
  }
  
  setSlidewight();
  createPagination();
  setActiveSlide(0, false);

  window.addEventListener('resize', function () {
    setSlidewight();
    setActiveSlide(activeSlide, false);
  })

})();
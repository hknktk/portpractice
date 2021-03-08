

  document.addEventListener('DOMContentLoaded',function(){
    const $menuButton = document.getElementById("menuButton");
    const $nav        = document.getElementById("nav");
    const $mask       = document.getElementById("mask");
    const $icon       = document.getElementById("icon");
    const $arrow       = document.getElementById("arrow");
    const $list       = $nav.querySelector("ul");
  
    
    $menuButton.addEventListener("click",function(){
      $menuButton.classList.toggle("active");
      $nav.classList.toggle("active");
      $mask.classList.toggle("active");
      $icon.classList.toggle("none");
      $arrow.classList.toggle("none");
    })
    
    $mask.addEventListener("click",function(){
      $menuButton.classList.toggle("active");
      $nav.classList.toggle("active");
      $mask.classList.toggle("active");
      $icon.classList.toggle("none");
      $arrow.classList.toggle("none");
    })
  
    $list.addEventListener("click",function(){
      $menuButton.classList.toggle("active");
      $nav.classList.toggle("active");
      $mask.classList.toggle("active");
      $icon.classList.toggle("none");
      $arrow.classList.toggle("none");
    })
  
    $arrow.addEventListener("click",function(){
      scrollTo(0, 0);
    })
  
  
      const targetElement = document.querySelectorAll(".js-target");
      document.addEventListener("scroll", function(){
      for (let i = 0; i<targetElement.length; i++){
      const getElementDistance =targetElement[i].
      getBoundingClientRect().top + targetElement[i].clientHeight * .8
         if(window.innerHeight > getElementDistance){
         targetElement[i].classList.add("show");
          }
        }
      })

  });

  {
    var side1 = document.getElementById("side1")
    window.addEventListener("scroll",function(){
      side1.style.left = -window.pageYOffset + "px";
    })
    var side2 = document.getElementById("side2")
    window.addEventListener("scroll",function(){
      side2.style.left = window.pageYOffset + "px";
    })
    var down = document.getElementById("down")
    window.addEventListener("scroll",function(){
      down.style.opacity = 1- window.pageYOffset/400;
    })
  }




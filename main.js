const menuBtn = document.querySelector('#menuBtn')
const sideNav = document.querySelector('#sideNav')

sideNav.style.right = "-250px"
menuBtn.addEventListener('click', function(){
      if (sideNav.style.right == "-250px"){
            sideNav.style.right = "0"
      } else {
          sideNav.style.right = "-250px"  
      }
})

var scroll = new SmoothScroll('a[href*="#"]', {

      speed: 1000,
      SpeedAsDuration: true
}) ;
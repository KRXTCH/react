var foregroundScrollValue = 15;
var middlegroundScrollValue = 0;
var backgroundScrollValue = 0;

var dividerScrollValue = -5;
var aboutPageScrollValue = -6;
var projectsPageScrollValue = 94;

var backCoef = 2.5;
var middleCoef = 0;
var foreCoef = 5;

var foreground = document.getElementsByClassName("background__front");
var middleground = document.getElementsByClassName("background__middle");
var background = document.getElementsByClassName("background__back");
var main_container = document.getElementsByClassName("main__container");

window.addEventListener(
  "wheel",
  function(e) {
    if(foregroundScrollValue > -100){
    if (e.deltaY > 0) {
      foregroundScrollValue -= foreCoef;
      middlegroundScrollValue -= middleCoef;
      backgroundScrollValue += backCoef;
      aboutPageScrollValue -= foreCoef;
      projectsPageScrollValue -= foreCoef;
      dividerScrollValue-= foreCoef;
    }
  }
    if (backgroundScrollValue > 0) {
      if (e.deltaY < 0) {
        foregroundScrollValue += foreCoef;
        middlegroundScrollValue += middleCoef;
        backgroundScrollValue -= backCoef;
        aboutPageScrollValue += foreCoef;
        projectsPageScrollValue += foreCoef;
        dividerScrollValue += foreCoef;
      }
    }

    background[0].style.transform = `translateY(${backgroundScrollValue}vh) translateZ(5vh)`;
    middleground[0].style.transform = `translateY(${middlegroundScrollValue}vh) translateZ(55vh)`;
    foreground[0].style.transform = `translateY(${foregroundScrollValue}vh) translateZ(105vh)`;

    main_container[0].children[4].children[1].style.transform = `translateY(${dividerScrollValue}vh) translateZ(105vh)`;
    main_container[0].children[4].children[2].style.transform = `translateY(${aboutPageScrollValue}vh) translateZ(105vh)`;
    main_container[0].children[4].children[3].style.transform = `translateY(${projectsPageScrollValue}vh) translateZ(105vh)`;
  },
  false
);

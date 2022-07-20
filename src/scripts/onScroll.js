var foregroundScrollValue = 10;

var dividerScrollValue = -5;
var aboutPageScrollValue = -6;
var projectsPageScrollValue = 94;
var expProPageScrollValue = 200;

var foreGroundTranslateY = 0;
var backgroundTranslateY = 0;
var middlegroundTranslateY = 0;

var foreground = document.getElementsByClassName("background__front");
var middleground = document.getElementsByClassName("background__middle");
var background = document.getElementsByClassName("background__back");
var main_container = document.getElementsByClassName("main__container");

window.addEventListener(
  "scroll",
  function() {

    console.log((this.window.scrollY/7))

    if(-this.window.scrollY/10 + foregroundScrollValue >= -50){
      foreGroundTranslateY = (-this.window.scrollY/10 + foregroundScrollValue);
    }

    if(this.window.scrollY/7 < 150){
      backgroundTranslateY = this.window.scrollY/7;
      middlegroundTranslateY = this.window.scrollY/100;
    }

    background[0].style.transform = `translateY(${backgroundTranslateY}vh) translateZ(5vh)`;
    middleground[0].style.transform = `translateY(${middlegroundTranslateY}vh) translateZ(55vh)`;
    foreground[0].style.transform = `translateY(${foreGroundTranslateY}vh) translateZ(105vh)`;

    main_container[0].children[4].style.transform = `translateY(${(this.window.scrollY/100)}vh) translateZ(60vh)`; // home
    main_container[0].children[5].style.transform = `translateY(${(-this.window.scrollY/10 + dividerScrollValue)}vh) translateZ(120vh)`; // divider
    main_container[0].children[6].style.transform = `translateY(${(-this.window.scrollY/10 + aboutPageScrollValue)}vh) translateZ(105vh)`; // about_me
    main_container[0].children[7].style.transform = `translateY(${(-this.window.scrollY/10 + projectsPageScrollValue)}vh) translateZ(105vh)`; // projects
    main_container[0].children[8].style.transform = `translateY(${(-this.window.scrollY/10 + expProPageScrollValue)}vh) translateZ(105vh)`; //exp_pro
   },
  false
);

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
var ul = document.getElementById('navbar__list');
var list = document.querySelectorAll('.landing__container');





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i=0;i<list.length ; i++)
{
    var li = document.createElement('li');
    li.textContent = list[i].querySelector('h2').textContent;
    var link = document.createElement('a');
    link.setAttribute('href' , `#section${i+1}`);
    li.setAttribute('id',`link${i+1}`);
    link.appendChild(li);
    ul.appendChild(link);
    li.style.cssText = 'font-size: 1.7em ;text-decoration: underline';
}


// Add class 'active' to section when near top of viewport
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    var bot;
    if(bounding.bottom >0)
    {
        bot = window.innerHeight - bounding.bottom;
    }
    else{
        bot = window.innerHeight + bounding.bottom;
    }
    console.log(bounding.top);
    console.log(bot);
    return (
        bounding.top+100 >= 0 &&
        bot+50 >=0
    );
};


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
    for(let i=0;i<list.length ; i++)
    {
        var item = document.getElementById(`section${i+1}`);
        var ans = isInViewport(item);
        if (!ans){
            item.setAttribute('class','none');
            document.getElementById(`link${i+1}`).style.color = 'blue';
        }
        if(ans){
            document.getElementById(`link${i+1}`).style.color = 'red';
            console.log(document.getElementById(`link${i+1}`));
            item.setAttribute('class' , 'your-active-class');
        }
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



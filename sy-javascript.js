var globals = {
	'letters': [],
	'masks': []
};

// Animates a cursive section mask of the 'Relish' SVG
function animateSectionMask(index) {
	// If current section exists show it and animate mask
	if(index >= 0 && index < globals.masks.length) {

		$(globals.letters[index]).css({"opacity": 1});

		var pathLength = parseInt($(globals.masks[index]).css("stroke-dasharray"));

		$(globals.masks[index])
			.css({"opacity": 1})
			.velocity({
				"stroke-dashoffset": pathLength * 2
			}, {
				"duration": pathLength,
				// "duration": 2000,
				"easing": "linear",
			})
			.velocity({
				"opacity": 0
			}, {
				// "duration": 250,
				"duration": pathLength / 3,
				"delay": 50,
				"easing": "ease-in",
				"queue": false
			}
		);

		setTimeout(function() {
			animateSectionMask(index-1); // Animate next section
		}, pathLength / 4);
	}
	// If section does not exist finish by animating in tittle above the letter 'i' in 'Relish'
	else {
		$("#Tittle_Mask").velocity({
			"opacity": 0,
		}, {
			"duration": 600,
			"easing": "ease-in-out",
			"delay": 2500
		});
		$('#bulb').velocity({opacity: 1}, {duration: 1000});
		$('#idea').velocity('transition.bounceIn', {
			duration: 1000, 
			delay: 250,
			complete: function() {
				$('#lightDashes path').velocity('transition.shrinkIn', {
					duration: 500,
					stagger: 50,
					complete: function() {
							$('#arrow').velocity('callout.bounce', { duration: 2000, delay: 2000 });
					}
				});
			}
		});
	}
}

function initAnimation() {
	/* Store non-mask section paths (i.e. the letters themselves) */
	globals.letters = $('path:not([id$="_Mask"])');

	/* Store section mask paths and set stroke dash array to path length */
	globals.masks = $('path[id$="_Mask"]');

	/* Set stroke dash array length to path length */
	globals.masks.each(function(i, el) {
		var pathLength = el.getTotalLength();
		$(el).css({
			"stroke-dasharray": pathLength
		});
	});

	/* Trigger relish SVG animation */
	animateSectionMask(globals.masks.length - 1);
}

$(function() {

	initAnimation();
	setInterval(initAnimation, 10000); // Repeat every 10 seconds

});



/*---Menu---------*/ 
/*------https://codepen.io/ig_design/pen/pGKxpO------*/ 

(function($) { "use strict";
		
	//Page cursors

	/*
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
	}
	*/
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	         
              
})(jQuery); 

/*----Scroll------ */



/*------Animated images------- */
// https://www.webredone.com/
let elementsCC = document.querySelectorAll('.origin-center');
 
elementsCC.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
  
  element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');
 
elementsTL.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //top left
  let resultTL = x + 'px ' + y + 'px';
  
  element.style.setProperty("transform-origin", resultTL)
}); // forEach





/* Control sliding menu on screens smaller than a specified breakpoint */
(function(menu_button, links, breakpoint) {
	'use strict';
	var menulink = document.getElementById(menu_button),
	    nav = document.getElementById(links);
		
	nav.className = 'start';
	setTimeout(function() {
		nav.className = 'collapsed';
	}, 20);
		
	menulink.onclick = function() {
		if (nav.className === 'displayed') {
			nav.className = 'collapsed';
		} else {
			if (window.innerHeight < 450) {
				window.scrollTo(0, menulink.getBoundingClientRect().top);
			}
			nav.className = 'displayed';
		}
		return false;
	};
	
	window.onresize = function() {
		if (window.innerWidth < breakpoint) {
			nav.className = 'collapsed';
		}
	};	
})('menulink', 'navlinks', 680);

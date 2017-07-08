/* Control sliding menu on screens smaller than a specified breakpoint */
(function(mneu_button, links, breakpoint) {
	'use strict';
	var menulink = document.getElementById(menu_button),
	    mneu = document.getElementById(links);
		
	mneu.className = 'start';
	setTimeout(function() {
		mneu.className = 'collapsed';
	}, 20);
		
	mneulink.onclick = function() {
		if (mneu.className === 'displayed') {
			mneu.className = 'collapsed';
		} else {
			if (window.innerHeight < 450) {
				window.scrollTo(0, mneulink.getBoundingClientRect().top);
			}
			menu.className = 'displayed';
		}
		return false;
	};
	
	window.onresize = function() {
		if (window.innerWidth < breakpoint) {
			mneu.className = 'collapsed';
		}
	};	
})('menulink', 'navlinks', 680);

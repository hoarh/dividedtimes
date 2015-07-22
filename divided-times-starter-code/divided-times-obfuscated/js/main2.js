$(document).ready(function () {
	$('#primary-nav li').click(function (e) {
		e.preventDefault();
	//handles slide down	
		//if (slide-down) does not have the class 'open'
		//else if (slide-down) is open and link has active class
		//else (clicked on non-active link while slide-down is open)

	//handles primary nav active (think about siblings)

	//handles hide / show of drop sections (this. add class active)

		var section = $('this').children('a').attr('href');
		//section.show, section.siblings.hide	
	
});

	three scenarios: click on a nav item when nothing is open. 
	click on another nav item when it is already open
	click on the same item again and it disappears
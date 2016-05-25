/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

	//Custom modifications -------------------
	//Add fix for IE10 on Windows 8 & Windows Phone
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
		document.querySelector('head').appendChild(msViewportStyle)
	}



	//ZenDesk Defaults ---------------------

	// toggle categories and sections on the home page
	$(".category-tree").on("click", "h2 a, h3 a", function() {
		$(this).parent().nextAll().toggle();
		return false;
	});

	// social share popups
	$(".share a").click(function(e) {
		e.preventDefault();
		window.open(this.href, "", "height = 500, width = 500");
	});

	// toggle the share dropdown in communities
	$(".share-label").on("click", function(e) {
		e.stopPropagation();
		var isSelected = this.getAttribute("aria-selected") == "true";
		this.setAttribute("aria-selected", !isSelected);
		$(".share-label").not(this).attr("aria-selected", "false");
	});

	$(document).on("click", function() {
		$(".share-label").attr("aria-selected", "false");
	});

	// show form controls when the textarea receives focus
	$(".answer-body textarea").one("focus", function() {
		$(".answer-form-controls").show();
		//removing container when on focus
		$(".answer-form-controls").removeClass("container");
	});

	$(".comment-container textarea").one("focus", function() {
		$(".comment-form-controls").show();
	});

});

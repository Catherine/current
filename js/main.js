$("li a").click(function(event){
	event.preventDefault();
	var id = $(this).attr("href");
	var divPosition = $(id).offset().top;
	$("html, body").animate({scrollTop: divPosition})
});

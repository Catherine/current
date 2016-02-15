$("li a").click(function(event){
	event.preventDefault();
	var id = $(this).attr("href");
	var divPosition = $(id).offset().top;
	$("html, body").animate({scrollTop: divPosition})
});


function toggle(id) {
    var el = document.getElementById(id);
    var box = el.getAttribute("class");
    if(box == "hide"){
        el.setAttribute("class", "show");
    }
    else{
        el.setAttribute("class", "hide");
    }
}


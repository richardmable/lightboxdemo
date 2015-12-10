$(document).ready(function() {
	//if I click lightbox image, I will have some function
	//use the word "this" which will pull image from one just clicked,
	//rather than every single image with class "light-box" image
	$(".lightbox-image").click(function(){
		//show lightBoxOuter to display image
		$(".lightBoxOuter").fadeIn(1000);
		//pulls data from "data-image-link" when clicked
		var url = $(this).data("image-link");
		//replace html in lightbox inner with img src
		$(".lightBoxInner").html("<img src='" + url + "'></img>")
		setTimeout(function(){
			$(".lightBoxOuter").fadeOut(1000);
		}, 5000)
	});
});



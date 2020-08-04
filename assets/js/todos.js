// check off todos with click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// remove todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab new todo
		let todoText = $(this).val();
		$(this).val("");
		// create new LI and add to UL
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
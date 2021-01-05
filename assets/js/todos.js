// check of specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
	// fade out then remove element when x is clicked
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	// only targets ul & prevents event bubbling
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// if enter is pressed then add the word to the list
	if (event.which === 13) {
		// grab new todo text from input
		var todoText = $(this).val();

		// clear input after variable saved
		$(this).val("");

		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
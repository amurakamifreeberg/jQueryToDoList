//*check off specific tasks by clicking on them
$("li").click(function(){
	$(this).css({
		'color':'gray',
		'textDecoration':'line-through'
	});
});

//* if <li> is already gray
	// turn it black
	// else 
	// turn it gray
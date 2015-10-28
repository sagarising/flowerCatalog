





$(document).ready(function(){
	$("section.gallery > img").click(function(){
		var a=$(this).attr("alt");
		var toShow="[name='"+a+"']";
		$("video").hide();
		console.log(toShow);
		
		$("video").each(function pause(){
			($(this).get(0).pause());
		});
			

		// $("video").trigger('pause')    // we can also trigger play/pause events
		$(toShow).show().trigger('play');
	});

});
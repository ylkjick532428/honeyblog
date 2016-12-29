$( document ).ready(function() {
    $("#search_submit").click(function(){
    	var search_text = $("#search_text").val();
    	var url = "https://www.google.com/ncr#newwindow=1&safe=strict&q=" + search_text
    	window.open(url, 'google');
  		return false;
    });
});
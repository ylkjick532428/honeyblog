$( document ).ready(function() {
    

    // xhr加载数据
	function loadData(callback) {

		// var search_data = $($.get("/search.json"));
		// callback(search_data);
		$.ajax({
				url: '/content.json',
				type: "get",
				// data:JSON.stringify(),
				dataType: "json",
				contentType: "application/json",
				success: function(result) {
					callback(result);
				},
				error: function() {
					console.log("error can't get search.json");
				}
			});

	}
	// 匹配文章内容返回结果
	function matcher(post, regExp) {
	    // 匹配优先级：title > tags > text
	    // console.log (post.tags);
	    return regExp.test(post.title) || post.tags.some(function(tag) {
	        return regExp.test(tag.name);
	    }) || regExp.test(post.text);
	}

	$.addTemplateFormatter("dateFormatter",
    	function(value, template) {
        	return value.substr(0, 10);
    });

	$.addTemplateFormatter("tagsFormatter",
    	function(value, template) {
	    	var text = [];
	    	$.each(value, function(i){
	    		text.push("<span>#" + value[i].name + "</span>");
	    	})
	        return text.join("");
    });

	$.addTemplateFormatter("textFormatter",
    	function(value, template) {
	        return value.substr(0, 30);
    });

	// 渲染到页面
	function render(data) {
		if (data){
			$("#search-result").loadTemplate($("#template-test"), data);
		}
		
	}

	// 查询
	function search_main(key) {
	    // 关键字 => 正则，空格隔开的看作多个关键字
	    // a b c => /a|b|c/gmi
	    var regExp = new RegExp(key.replace(/[ ]/g, '|'), 'gmi');
	    loadData(function(data) {
	        var result = data.filter(function(post) {
	        	var jick = matcher(post, regExp);
	            return jick;
	        });
	        if (result.length == 0){
				$("#search-result").loadTemplate($("#template-error"), {});
			}
			else{
				render(result);
			}
	        
	    });
	}


	$("#search_submit").click(function(){
    	var search_text = $("#search_text").val();
    	// search_main(search_text);
    	var url = "https://www.google.com/ncr#newwindow=1&safe=strict&q=" + search_text
    	window.open(url, 'google');
  		return false;
    });

	// var customSearch = new HexoSearch({
	//   endpoint: "search.json"
	// });

    $("#search_text").keyup(function(){
    	// console.log($("#search_text").val());
    	var search_text = $("#search_text").val();
    	if (search_text.length >= 3){
    		search_main(search_text);
    	}
    	else{
    		$("#search-result").empty();
    	}
    	
    });

    $("#search_text").blur(function(e){
    	
    	if ($(e.target).parents("div.search-panel")){
    		console.log(e);
    	}
    	else{
    		
    		$("#search-result").empty();
    	}

    });

});
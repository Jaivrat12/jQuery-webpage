$(function() {

	$(".mouse-position").hide();

	$("html").on("mouseover click", function(event) {
		
		$(".mouse-position").html("Mouse Position:<br>"+event.pageX+", "+event.pageY);
    });
	
	function printTime() {
		
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth();
		var date = d.getDate();
		var hours = d.getHours();
		var mins = d.getMinutes();
		var secs = d.getSeconds();
		
		if(date < 10)
		date = "0" + date;
		if(month < 10)
		month = "0" + month;
		if(hours < 10)
		hours = "0" + hours;
		if(mins < 10)
		mins = "0" + mins;
		if(secs < 10)
		secs = "0" + secs;

		$(".date").html("Today: "+date+"-"+month+"-"+year+"<br>Time: "+hours+":"+mins+":"+secs);
	}
	setInterval(printTime, 1000);
	
	$("#item").click(function() {
		
		$("#submenu").slideToggle(350);
    });
	
	var options = false;
	$("img.options").click(function() {
		
		var src;
		if(!options) {
			
			options = true;
			src = "Assets/close-options-img.png";
		}
		else {
			
			options = false;
			src = "Assets/options-img.png";
		}
		$("img.options").attr("src", src);
	});
	
	$(".switch-theme .switch input").click(function() {
		
		$("body").toggleClass("light-theme");
	});

	var displayTime = true;
	$(".time-display .switch input").click(function() {
		
		if(displayTime) {

			$(".date").animate({right: '-168px'}, 400);
			displayTime = false;
		}
		else {

			$(".date").animate({right: '0px'}, 400);
			displayTime = true;
		}
	});

	$(".mouse-pos-display .switch input").click(function() {
		
		$(".mouse-position").fadeToggle(400);
	});

	var newTab = false;
	$(".new-tab .switch input").click(function() {
		
		if(!newTab) {

			$("a").attr("target", "_blank");
			newTab = true;
		}
		else {

			$("a").removeAttr("target");
			newTab = false;
		}
	});

	$(".search-list ._button").click(function() {

		var val = $(".search-list input").val();
		if(val !== '') {

			var elem = $("<li></li>").html(`<span>${val}</span>`);
			$(elem).append("<br><button class='addToSearchBar _button'>Add to Search Bar</button>");
			$(elem).append("<button class='remove _button'>Remove</button>");
			$("#mylist").append(elem);
			$(".search-list input").val("");
			$(".search-list em").text("");
		}

		$(".addToSearchBar").click(function() {

			var searchItem = $(this).parent().children().eq(0).text();
			$(".search-engine input").focus();
			$(".search-engine input").attr("value", searchItem);
			$("a").attr("href", "https://www.google.co.in/search?q=" + searchItem);
		});

		$(".remove").click(function() {

			$(this).parent().remove();
		});
	});
});

function getLink() {

	var link = $(".search-engine input").val();
	if(link.length > 0)
		$("a").attr("href", "https://www.google.co.in/search?q=" + link);
}

 function checkSearchBar() {

	if($(".search-engine input").val().length == 0)
		alert("Are you trying to check what will happen if you just left the Search Bar Empty and click on 'Go'? HEHEHEHE");
}
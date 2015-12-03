$(document).ready(function() {
	$(".img-scaled-wh").css("opacity", "0");
		$("#background1").css("opacity", "1");
		setTimeout(function () {
			$("#background2").css("opacity", "1");
		}, 3000)
		setTimeout(function () {
			$("#background3").css("opacity", "1");
		}, 6000)
		
	setInterval(function () {
		$(".img-scaled-wh").css("opacity", "0");
		$("#background1").css("opacity", "1");
		setTimeout(function () {
			$("#background2").css("opacity", "1");
		}, 3000)
		setTimeout(function () {
			$("#background3").css("opacity", "1");
		}, 6000)
	}, 12000)

	$("#arrow-right").click(function() {
	if ($("#portfolio-container-1").hasClass(".portfolio-wrapper-active"))
		$("#portfolio-container-1").addClass(".arrow-right-active");
		$("#arrow-right").hide();
		$("#arrow-left").show();
	}, 0)

	$("#arrow-left").click(function() {
	if ($("#portfolio-container-2").hasClass(".portfolio-wrapper-active"))
		$("#portfolio-container-2").addClass(".arrow-left-active");
		$("#arrow-left").hide();
		$("#arrow-right").show();
	}, 0)	
})

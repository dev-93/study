$(".product-colors span").click(function(){
// .product-colors span 을 누르면
	$(".product-colors span").removeClass("active");
	// .product-colors span의 active 클래스 제거
	$(this).addClass("active");
	// this = 4개의 span중에 누른 요소에게 active 클래스를 추가
	$("body").css("background",$(this).attr("data-color"));
	// body의 background에 현재 active되어있는 요소의 data-color 가져오기
	$(".product-price").css("color",$(this).attr("data-color"));
	// product-price의 color에 현재 active되어있는 요소의 data-color 가져오기
	$(".product-button").css("color",$(this).attr("data-color"));
	// product-button의 color에 현재 active되어있는 요소의 data-color 가져오기
	$(".product-pic").css("background-image",$(this).attr("data-pic"));
	// product-pic의 background-image에 현재 active되어있는 요소의 data-pic 가져오기
});

// --------------------------------------
// 2.1
	// $(function () {
	// 	$('h1').fadeOut(1500);
	// 	$('h1').fadeIn(1500);
	// });
// --------------------------------------

// --------------------------------------
// 2.2
	// $(function () {
	// 	$('.head-moto-img').fadeTo(0,0.05);
	// 	$('.head-moto-img').fadeTo(7000,1);
	// });
// --------------------------------------

// --------------------------------------
// 2.3
// $(function () {
// 	$('.features, .work, .blog, .testmonials').hide(2000);
// 	$('.features, .work, .blog, .testmonials').show(1000);
// });
// --------------------------------------

// --------------------------------------
// 2.4
// $(function () {
// 	$('.blog-post-date > span').fadeOut(1500, 0);
// 	$(".blog-post-info").hide(2000, function(){
// 		$('.blog-post-date > span').show(2000);
// 		$(".blog-post-info").fadeIn(6000);
// 	});
// });
// --------------------------------------

// --------------------------------------
// 2.5
// $(function zr(name_obj, t1,t2) {
// 	var name_obj=$("h1"),t1=2000, t2=4000;
// 	$(name_obj).hide(t1);
// 	$(name_obj).show(t2);
// });
// --------------------------------------

// --------------------------------------
// 2.6
// $(function prozor(name_obj, time,opacity) {
// 	var name_obj=$("h1"),time=2000, opacity=0.05;
// 	$(name_obj).fadeTo(time, opacity);
// 	$(name_obj).hide(time);
// 	$(name_obj).show(time);
// 	$(name_obj).fadeTo(time, 1);
// });
// --------------------------------------

// --------------------------------------
// 2.7
// $(function () {
// 	$(".top-nav").hide(1000, function(){
// 		alert("Меню було сховано ");
// 	});
// });
// --------------------------------------

// --------------------------------------
// 2.8
$(function () {
	$(".slide-text").hide(1000, zr(".head", 1000), prozor(".top-nav",2000 ,0.5));
});

function zr(name_obj, t1,t2) {
	$(name_obj).hide(t1);
	$(name_obj).show(t2);
};

function prozor(name_obj, time,opacity) {
	$(name_obj).fadeTo(time, opacity);
	$(name_obj).hide(time);
	$(name_obj).show(time);
	$(name_obj).fadeTo(time, 1);
};
// --------------------------------------
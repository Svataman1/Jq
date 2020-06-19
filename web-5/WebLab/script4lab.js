$(function () {
	$(".blog-post").click(function(){
		var kk=$("h4 ",this).text()+" "+$(" .categorie ",this).text();
		$("textarea").html(function(i, origText){
			return kk+"\n"+origText;
		});
	});
});
// --------------------------------------
// 4.1
// $(function () {
// 	$(".top-nav li").click(function(){
// 		alert($(this).html());
// 	});
// });
// --------------------------------------

// --------------------------------------
// 4.2
// $(function () {
// 	alert($("#email").val());
// });
// --------------------------------------

// --------------------------------------
// 4.3
// $(function () {
// 	$(".link-moto").click(function(){
// 		alert($(this).attr("href"));
// 	})
// });
// --------------------------------------

// --------------------------------------
// 4.4
// $(function () {
// 	$("img[src*=moto]").click(function(){
// 		alert($(this).attr("src"));
// 	})
// });
// --------------------------------------

// --------------------------------------
// 4.5
// $(function () {
// 	$("#hide-moto").click(function(){
// 		$("#hide-moto p").html("<i>Зараз функція недоступна. <br> Спробуйте пізніше</i>");
// 	})
// });
// --------------------------------------

// --------------------------------------
// 4.6
// $(function () {
// 	$(".m6 ").click(function(){
// 		$(".contatct-active").html("<img height='30px' src='images/pic_eng.png'>");
// 	})
// });
// --------------------------------------

// --------------------------------------
// 4.7
// $(function () {
// 	$("img[src*=moto]").click(function(){
// 		$(this).next().html(function(i,origText){
// 			return "<a href='#'>Ви обрали:</a>"+origText;
// 		});
// 	})
// });
// --------------------------------------

// --------------------------------------
// 4.8
// $(function () {
// 	$("img[src*=moto]").click(function(){
// 		$(this).next().html(function(i,origText){
// 			return "<a href='#' style='font-style: italic;'>Ви обрали:</a><br><br>"+origText;
// 		});
// 	})
// });
// --------------------------------------

// --------------------------------------
// 4.9
// $(function () {
// 	$(".blog-post").hover(function(){
// 		if ($(".categorie:contains(Бажаєте)",this).text() != $(".categorie",this).text()){
// 			$(".categorie",this).text(function(i,origText){
// 				return "Бажаєте замовити? "+origText
// 			});
// 		}
// 		$(".categorie",this).toggle();
// 	});
// });
// --------------------------------------

// --------------------------------------
// 4.10
// $(function () {
// 	$(".blog-post").click(function(){
// 		var kk=$("h4 ",this).text()+" "+$(" .categorie ",this).text();
// 		$("textarea").html(function(i, origText){
// 			return kk+"\n"+origText;
// 		});
// 	});
// });
// --------------------------------------



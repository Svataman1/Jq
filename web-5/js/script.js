// $(document).ready(function () {
//     function cartSum(){
//         var count=0;
//         var sum=0;
//         $(".koshik-wrapper>.head-moto-img").each(
//             function(){
//                 count++;
//                 sum+=parseInt($(this).attr('price'));
//             }
//         );
//         if (count>0) {
//             $(".koshik-wrapper").addClass("full-koshik");
//         }
//         else {
//             $(".koshik-wrapper").addClass("full-koshik");
//         }
//         $(".cart p").html("Кількісь: <string>"+count+"</string> на суму: <string>"+ sum+"</string>UAH ");
//     }
//     $(".head-moto-img").click(function(){
//         $(".koshik-wrapper").append($(this).clone().click(function(){
//             $(this).remove();
//             cartSum()
//         }));
//         cartSum()
//     });
// });
// --------------------------------------
// 5.1
///$(function () {
// 	$("#about-moto").addClass("new");
// });
// --------------------------------------

// --------------------------------------
// 5.2
// $(function () {
//     $("#about-moto").before("<p class='fon_yellow'>Цей абзац доданий за допомогою методу before</p>")
//     $("#about-moto").after("<p class='fon_yellow'>Цей абзац доданий за допомогою методу after</p>");
//     $("#about-moto").prepend("<p class='fon_yellow'>Цей абзац доданий за допомогою методу prepend</p>");
//     $("#about-moto").append("<p class='fon_yellow'>Цей абзац доданий за допомогою методу append</p>");
// });
// --------------------------------------

// --------------------------------------
// 5.3
// $(function () {
//     $(".top-nav li").hover(function(){
//         $(this, "li").toggleClass("svitlo")})
// });
// --------------------------------------

// --------------------------------------
// 5.4
// $(function () {
//     $(".head-moto-img").click(function(){
//         $(this).clone(true).prependTo(".koshik-wrapper");
//         if ($(".koshik-wrapper .head-moto-img").length>0) {
//             $(".koshik-wrapper").addClass("full-koshik");
//         }
//     });
// });
// --------------------------------------

// --------------------------------------
// 5.5
// $(function () {
//     $(".head-moto-img").click(function(){
//         $(this).clone().remove().appendTo(".koshik-wrapper");
//         if ($(".koshik-wrapper .head-moto-img").length>0) {
//             $(".koshik-wrapper").addClass("full-koshik");
//         }
//     });
// });
// --------------------------------------

// --------------------------------------
// 5.6
// $(function () {
//     $(".head-moto-img").click(function(){
//         $(this).remove().clone().appendTo(".koshik-wrapper div[nomer='"+$(this).attr('nomer')+"']");
//         if ($(".koshik-wrapper .head-moto-img").length>0) {
//         $(".koshik-wrapper").addClass("full-koshik");}
//         }
//     );
// });
// --------------------------------------

// --------------------------------------
// 5.7
// $(document).ready(function () {
//     function cartSum(){
//         var count=0;
//         var sum=0;
//         $(".koshik-wrapper>.head-moto-img").each(
//             function(){
//                 count++;
//                 sum+=parseInt($(this).attr('price'));
//             }
//         );
//         if (count>0) {
//             $(".koshik-wrapper").addClass("full-koshik");
//         }
//         else {
//             $(".koshik-wrapper").addClass("full-koshik");
//         }
//         $(".cart p").html("Кількісь: <string>"+count+"</string> на суму: <string>"+ sum+"</string>UAH ");
//     }
//     $(".head-moto-img").click(function(){
//         $(".koshik-wrapper").append($(this).clone().click(function(){
//             $(this).remove();
//             cartSum()
//         }));
//         cartSum()
//     });
// });
// --------------------------------------

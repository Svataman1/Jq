$(function () {
    $(this).click(function(e){
        change_width($(e.target),$(e.target).width());
    });
});
function change_width(selectorObj,w) {
        $(selectorObj).width((w*0.3)).height(i*0.3);
    };
// --------------------------------------
// 6.1
// $(document).ready(function () {
//     $(".header .slide-btn").click(function(){
//         $(".header .slide-btn").height(100);
//     });
// });
// --------------------------------------


// --------------------------------------
// 6.2
// $(function () {
//     $(this).click(function(e){
//         change_width($(e.target),20);
//     });
// });
// function change_width(selectorObj,w) {
//         $(selectorObj).width(w);
//     };
// --------------------------------------

// --------------------------------------
// 6.3
// $(function () {
//     $(this).click(function(e){
//         change_width($(e.target),$(e.target).width());
//     });
// });
// function change_width(selectorObj,w) {
//         $(selectorObj).width((w*0.3)).height(w*0.3);
//     };
// --------------------------------------

// --------------------------------------
// 6.4
// $(function () {
//     $(this).click(function(e){
//         change_width($(e.target));
//     });
// });
// function change_width(selectorObj) {
//         $(selectorObj).width().height(height()*2);
//         console.log(w+" "+h);
//     };
// --------------------------------------
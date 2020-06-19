// --------------------------------------
// 6.1
// $(document).ready(function () {
//   $(".header .slide-btn").click(function () {
//     $(".header .slide-btn").height(100);
//   });
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
//         $(selectorObj).width("50%").height("50%");
//     };
// --------------------------------------

// --------------------------------------
// 6.5
// $(function () {
//     $(".head-moto-img").click(function (e) {
//         change_width(this);
//     });
// });
// function change_width(selectorObj) {
//     if ($(selectorObj).attr("title") == "1") {
//         $(selectorObj).width("").height("");
//         $(selectorObj).attr("title", "");
//     }
//     else {
//         console.log(`3`);
//         $(selectorObj).width(function (i, val) {
//             return val / 1.5;
//         }).height(function (i, val) {
//             return val / 1.5;
//         });
//         $(selectorObj).attr("title", "1");
//     }
// };
// --------------------------------------

// --------------------------------------
// 6.6
// $(function () {
//     $("img").hover(
//       function () {
//         $(this).width("50%");
//       },
//       function () {
//         $(this).width("");
//       }
//     );
//   });
// --------------------------------------

// --------------------------------------
// 6.7
// $(function () {
//     $("img").hover(
//         function () {
//             change_width_b(this);
//         },
//         function () {
//             change_width_s(this);
//         }
//     );
// });
// function change_width_b(selectorObj) {
//     $(selectorObj).width("150%");
// }
// function change_width_s(selectorObj) {
//     $(selectorObj).width(function (i, val) {
//         return val / 1.5;
//     });
// }
// --------------------------------------

// --------------------------------------
// 6.8
// $(function () {
//     $("img").click(function () {
//         size_obj(this);
//     });
// });
// function size_obj(selectorObj) {
//     $(`#p`).text("Об'єкт - " + $(selectorObj).attr("alt") +
//         ". Його ширина - " + $(selectorObj).width() +
//         ", висота - " + $(selectorObj).height());
// }
// --------------------------------------

// --------------------------------------
// 6.9
// $(function () {
//   $("img").hover(function () {
//     size_obj(this);
//   });
// });
// function size_obj(selectorObj) {
//   $(`#p`).text(
//     "Об'єкт - " +
//       $(selectorObj).attr("src") +
//       ". Його ширина - " +
//       $(selectorObj).width() +
//       ", висота - " +
//       $(selectorObj).height()
//   );
// }
// --------------------------------------
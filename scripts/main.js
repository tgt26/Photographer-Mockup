// Responsive Navigation Bar
$(".open-btn").click(function() {
  $("#mySideBar").css("width", "200px");
  $(".grid-container:eq(0)").css("filter", "blur(2px)");
});

// function openNav() {
//   document.getElementById("mySideBar").style.width = "200px";
//   document.getElementsByClassName("grid-container")[0].style.filter =
//     "blur(2px)";
// }
$(".close-btn").click(function() {
  $("#mySideBar").css("width", "0");
  $(".grid-container:eq(0)").css("filter", "blur(0)");
});
// function closeNav() {
//   document.getElementById("mySideBar").style.width = "0";
//   document.getElementsByClassName("grid-container")[0].style.filter = "blur(0)";
// }

// Adds random number next to the hearts
function random() {
  var likeNum = document.getElementsByClassName("like-num");
  for (var j = 0; j < likeNum.length; j++) {
    likeNum[j].innerHTML = "<p>" + Math.floor(Math.random() * 101) + "</p>";
  }
}
random();

// Change heart type on click
var heart = $(".far.fa-heart.fa-2x");
heart.click(function() {
  // Change into filled red heart
  if ($(this).hasClass("far fa-heart fa-2x")) {
    $(this).removeClass("far fa-heart fa-2x");
    $(this).addClass("fas fa-heart fa-2x red");
  } else if ($(this).hasClass("fas fa-heart fa-2x")) {
    //   Change into outline heart
    $(this).removeClass("fas fa-heart fa-2x red");
    $(this).addClass("far fa-heart fa-2x");
  }
});

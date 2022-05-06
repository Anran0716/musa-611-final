/* CSS magic only */

function sendVal(val) {
  var myUrl = `./${val}.html`;
  window.location.assign(myUrl);
}

var ChangePage = function () {
  window.location.href = "./findRoute.html";
};

//  document.getElementById('button1').addEventListener("click", ChangePage);
$('#button1').click((e) => {
  window.location.href = "./picnic.html";
});

$('#button2').click((e) => {
  window.location.href = "./hiking.html";
});
$('#button3').click((e) => {
  window.location.href = "./camping.html";
});
$('#button4').click((e) => {
  window.location.href = "./driving.html";
});
$('#button5').click((e) => {
  window.location.href = "./shuttle.html";
});
$('#button6').click((e) => {
  window.location.href = "./eating.html";
});
$('#button-find').click((e) => {
  window.location.href = "./application.html";
});
$('#button8').click((e) => {
  window.location.href = "./page2-Introduction-y.html";
});
$('#button9').click((e) => {
  window.location.href = "./page4-Serviceoverview.html";
});

$('#button10').click((e) => {
  window.location.href = "./page1-Cover-y.html";
});

$('#button11').click((e) => {
  window.location.href = "./page3-Entrance-z.html";
});

$('#button12').click((e) => {
  window.location.href = "./page5-landmark-y.html";
});

$('#button13').click((e) => {
  window.location.href = "./car-rental.html";
});

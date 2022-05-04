/* CSS magic only */

function sendVal(val) {
    var myUrl="./application.html"+"?"+"val="+val;
    window.location.assign(myUrl);
 }

 var ChangePage = function(){
    window.location.href="./findRoute.html";

 }

//  document.getElementById('button1').addEventListener("click", ChangePage);
$('#button1').click(function(e){
    window.location.href="./picnic.html"
})

$('#button2').click(function(e){
    window.location.href="./hiking.html"
})
$('#button3').click(function(e){
    window.location.href="./camping.html"
})
$('#button4').click(function(e){
    window.location.href="./driving.html"
})
$('#button5').click(function(e){
    window.location.href="./shuttle.html"
})
$('#button6').click(function(e){
    window.location.href="./eating.html"
})
$('#button7').click(function(e){
    window.location.href="./application.html"
})
$('#button8').click(function(e){
    window.location.href="./page2-Introduction-y.html"
})
$('#button9').click(function(e){
    window.location.href="./page4-Serviceoverview.html"
})

$('#button10').click(function(e){
    window.location.href="./page1-Cover-y.html"
})

$('#button11').click(function(e){
    window.location.href="./page3-Entrance-z.html"
})

$('#button12').click(function(e){
    window.location.href="./page5-landmark-y.html"
})

$('#button13').click(function(e){
    window.location.href="./car-rental.html"
})

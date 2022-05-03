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
    window.location.href="./page2-Introduction-y.html"
})

$('#button2').click(function(e){
    window.location.href="./page5-landmark-y.html.html"
})
$('#button3').click(function(e){
    window.location.href="./page4-Serviceoverview.html.html"
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

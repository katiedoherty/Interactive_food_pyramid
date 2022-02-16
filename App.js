/*function date(){
var currentDate = new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var fullDate = month+"-"+day+"-"+year;
document.write(fullDate);}*/
function date() {
    document.getElementById("date").innerHTML = new Date().toString()
  }
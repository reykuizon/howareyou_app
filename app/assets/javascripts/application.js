// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
 
$(document).ready(function(){
  var name;
  var h = new Date();
  name = prompt ("What is your name?"); //POP UP QUESTION FOR NAME

  
  // CHECK FOR IF GOOD MORNING
  if (h.getHours()<12){ 
    $(".greetings").html("Good morning, " + name.toUpperCase()+ ".");
    $(".how_are_you").html("How's your morning?");  
}
  
  // CHECK IF GOOD AFTERNOON
  if (h.getHours()>=12){
    $(".greetings").html("Good afternoon, " + name.toUpperCase()+ ".");
    $(".how_are_you").html("How's your day?");  
  };
  
  // CHECK IF GOOD EVENING
  if (h.getHours()>=18){
    $(".greetings").html("Good evening, " + name.toUpperCase()+ ".");
    $(".how_are_you").html("How's your evening?");  
  };
  
});
 

function renderTime(){
  // SET VARIABLSE FOR DATES
  var d = new Date();
  var h = new Date();
  var m = new Date();
  var s = new Date();
  var y = new Date();
  var mn = new Date();
  var dt = new Date();
 
  // ASSIGN ARRAY FOR MONTHS
  var months = ["January","February","March","April","May","June","July","August","Septempber","October","November","December"];

  // ASSIGN ARRAY FOR DAYS
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  // GET AND SET DATE
  $(".month").html(months[mn.getMonth()] +" " +dt.getDate()+", "+y.getFullYear());

  // GET AND SET DAY
  $(".day").html(days[d.getDay()]);
  
  // GET AND SET TIME
  $(".hour").html(h.getHours()+":"+m.getMinutes()+":"+s.getSeconds()); 

  // SET TIMEOUT TO 1 SECOND
  setTimeout("renderTime()",1000);
};

renderTime();






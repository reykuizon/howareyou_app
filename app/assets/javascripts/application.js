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

function renderTime(){
  // SET VARIABLSE FOR DATE
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
  
  // ASSIGN ARRAY FOR HOURS
  var hour = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirten","Fourthen","Fifteen","Sixten","Seventeen","Eighteen","Nineteen","Twenty","Twenty-One","Twenty-Two","Twenty-Three"] ;

  // ASSIGN ARRAY FOR MINUTES
  var minutes = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirten","Fourthen","Fifteen","Sixten","Seventeen","Eighteen","Nineteen","Twenty","Twenty-1","Twenty-2","Twenty-3","Twenty-4","Twenty-5","Twenty-6","Twenty-7","Twenty-8","Twenty-9","Thirty","Thirty-1","Thirty-2","Thirty-3","Thirty-4","Thirty-5","Thirty-6","Thirty-7","Thirty-8","Thirty-9","Forty","Forty-1","Forty-2","Forty-3","Forty-4","Forty-5","Forty-6","Forty-7","Forty-8","Forty-9","Fifty","Fifty-1","Fifty-2","Fifty-3","Fifty-4","Fifty-5","Fifty-6","Fifty-7","Fifty-8","Fifty-9" ] ;
  
  // ASSIGN ARRAY FOR SECONDS
  var seconds = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirten","Fourthen","Fifteen","Sixten","Seventeen","Eighteen","Nineteen","Twenty","Twenty-1","Twenty-2","Twenty-3","Twenty-4","Twenty-5","Twenty-6","Twenty-7","Twenty-8","Twenty-9","Thirty","Thirty-1","Thirty-2","Thirty-3","Thirty-4","Thirty-5","Thirty-6","Thirty-7","Thirty-8","Thirty-9","Forty","Forty-1","Forty-2","Forty-3","Forty-4","Forty-5","Forty-6","Forty-7","Forty-8","Forty-9","Fifty","Fifty-1","Fifty-2","Fifty-3","Fifty-4","Fifty-5","Fifty-6","Fifty-7","Fifty-8","Fifty-9" ] ;
  
  // GET AND SET MONTHS
  $(".month").html(months[mn.getMonth()] +" " +dt.getDate()+", "+y.getFullYear());
  // GET AND SET DATE
  $(".day").html(days[d.getDay()]);
  // GET AND SET HOURS
  $(".hour").html(hour[h.getHours()]+" hundred : "); 

  // CHECK FOR PLURAL OR SINLGULAR NOUN TO USE FOR MINUTES
  if (m.getMinutes()<=1) {
    $(".minute").html(minutes[m.getMinutes()]+" minute ");   
  } else {
    $(".minute").html(minutes[m.getMinutes()]+" minutes "); 
  };

  // CHECK FOR PLURAL OR SINLGULAR NOUN TO USE FOR SECONDS
  if (s.getSeconds()<=1) {
    $(".second").html(seconds[s.getSeconds()]+" second");   
  } else {
     $(".second").html(seconds[s.getSeconds()]+" seconds"); 
  };
 
  // SET TIMEOUT TO 1 SECOND
  setTimeout("renderTime()",1000);
};

renderTime();






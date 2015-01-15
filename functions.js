
function FtoCconverter(f) {
  var celsius = ((f-32)*5/9).toFixed(1);
  return celsius;
};
function CtoFconverter(c) {
  var fahr = Math.round((c*9)/5+32);
  return fahr;
};
function screenColor(Ftemp) {
  var scrClr = "";
  if (Ftemp>120) {scrClr = "#E60000"};
  if (Ftemp<=120 && Ftemp>100) {scrClr = "#FF6600"};
  if (Ftemp<=100 && Ftemp>85) {scrClr = "#FF9933"};
  if (Ftemp<=85 && Ftemp>65) {scrClr = "#FFFF66"};
  if (Ftemp<=65 && Ftemp>45) {scrClr = "#CCFFCC"};
  if (Ftemp<=45 && Ftemp>32) {scrClr = "#D1D1FF"};
  if (Ftemp<=32 && Ftemp>20) {scrClr = "#66CCFF"};
  if (Ftemp<=20 && Ftemp>0) {scrClr = "#3366FF"};
  if (Ftemp<=0 && Ftemp>-20) {scrClr = "#0000CC"};
  if (Ftemp<=-20) {scrClr = "#0000CC"};
  
  return scrClr
}

var main = function() {
  $('.FToC').click(function() {
    var x = $('.degF').val();
    if (isNaN(x) || x==="") {
      $('.answer1').text("Please enter just the temperature number");
      $('.degF').val(" ");
      $('.answer2').text(" ");
      $('.answer3').text(" ");
    } else {
      var result = FtoCconverter(x);
      $('.answer1').css("fontSize",'1em');
      $('.answer2').css("fontSize",'1em');
      $('.answer3').css("fontSize",'1em');
      $('.answer1').text(x + " ° Fahrenheit").animate({fontSize:'2em'},"slow");
      $('.answer2').text("=").animate({fontSize:'2em'},"slow");
      $('.answer3').text(result + " ° Celsius").animate({fontSize:'2em'},"slow");
      $('.degF').val(" ");
      var newClr = screenColor(x);
      $('body').css("background-color", newClr);
      
    }
  });
  $('.CToF').click(function() {
    var x = $('.degC').val();
    if (isNaN(x) || x==="") {
      $('.answer1').text("Please enter a temperature");
      $('.degC').val(" ");
      $('.answer2').text(" ");
      $('.answer3').text(" ");
    } else {
      var result = CtoFconverter(x);
      $('.answer1').css("fontSize",'1em');
      $('.answer2').css("fontSize",'1em');
      $('.answer3').css("fontSize",'1em');
      $('.answer1').text(x + " ° Celsius ").animate({fontSize:'2em'},"slow");
      $('.answer2').text("=").animate({fontSize:'2em'},"slow");
      $('.answer3').text(result + " ° Fahrenheit").animate({fontSize:'2em'},"slow");
      $('.degC').val(" ");
      var newClr = screenColor(result);
      $('body').css("background-color", newClr);
    }
  });  
  
};
      
      
$(document).ready(main);
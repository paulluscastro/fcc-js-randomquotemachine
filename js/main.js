var red = 255;
var blue = 255;
var green = 255;

var r = null;
var g = null;
var b = null;

var opRed = null;
var opGreen = null;
var opBlue = null;

var redTransition = null;
var greenTransition = null;
var blueTransition = null;

var transitionDoneRed = true;
var transitionDoneGreen = true;
var transitionDoneBlue = true;

function changeBack(){

  redTransition = setInterval(function(){
    if (opRed == null){
      opRed = red > r ? -1 : 1;
    }

    if (red != r) {
      red += opRed;
      $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    } else {
      r = null;
      opRed = null;
      transitionDoneRed = true;
      clearInterval(redTransition);
    }

  }, 5);

  greenTransition = setInterval(function(){
    if (opGreen == null){
      opGreen = green > g ? -1 : 1;
    }

    if (green != g) {
      green += opGreen;
      $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    } else {
      g = null;
      opGreen = null;
      transitionDoneGreen = true;
      clearInterval(greenTransition);
    }

  }, 5);

  blueTransition = setInterval(function(){
    if (opBlue == null){
      opBlue = blue > b ? -1 : 1;
    }

    if (blue != b) {
      blue += opBlue;
      $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    } else {
      b = null;
      opBlue = null;
      transitionDoneBlue = true;
      clearInterval(blueTransition);
    }

  }, 5);
}

function randomColor() {
  if (transitionDoneRed && transitionDoneGreen && transitionDoneBlue) {
    r = 155 + Math.floor(Math.random() * 100);
    g = 155 + Math.floor(Math.random() * 100);
    b = 155 + Math.floor(Math.random() * 100);

    transitionDoneRed = false;
    transitionDoneGreen = false;
    transitionDoneBlue = false;

    $('#randomizer').css('color', 'rgb(' + (r - 50) + ',' + (g - 50) + ',' + (b - 50) + ')');
    $('#randomizer').css('border', '1px solid rgb(' + (r - 50) + ',' + (g - 50) + ',' + (b - 50) + ')');

    changeBack();
  }
}

$(document).ready(function(){
  $('#randomizer').on('click', function(e){
    var index = Math.floor(Math.random() * 102);
    var selected = quotes[index];

    randomColor();
    $('#quote').html("\"" + selected.quote + "\"");
    $('#author').html(selected.author + " --");

    var conteudo = selected.author + ': "' + selected.quote + '"';
    conteudo = conteudo.length > 140 ? conteudo.substring(0, 136) + '..."' : conteudo;
    conteudo = encodeURIComponent(conteudo);

    $('#sharer').prop('href', 'https://twitter.com/intent/tweet?text=' + conteudo);
    e.stopPropagation();
    e.preventDefault();
  });
});

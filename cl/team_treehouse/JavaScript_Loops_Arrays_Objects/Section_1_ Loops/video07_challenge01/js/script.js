var html = '';
var red, green, blue;
var rgbColor;
var counter = 0;

while ( counter < 4 ) {

  for ( var i = 1; i <= 2; i += 1 ) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
  counter += 1;
  document.write(html);
  }
}

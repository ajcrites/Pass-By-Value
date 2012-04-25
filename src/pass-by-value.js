//See http://jsfiddle.net/7485U/1/

/**
 * The purpose of this file is to display how JS actually passes object references by value
 * rather than passing objects by reference, confirming that JS is actually a pass-by-value language
 * @author Andrew Crites <explosion-pills@aysites.com>
 * @copyright 2012
 */
function barn(foon) {
   var foon = {};
   foon.foon = "barn";
}

var foon = {};
foon.foon = "foon";
barn(foon);

//Should be able to print from command-line JS interpreter without console or alert, browser without console,
//and browsers with console.
if (typeof console == 'undefined') {
   if (typeof alert == 'undefined') {
      print(foon.foon);
   }
   else {
      alert(foon.foon);
   }
}
else {
   console.log(foon.foon);
}

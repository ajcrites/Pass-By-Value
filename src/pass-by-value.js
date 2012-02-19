//See http://jsfiddle.net/7485U/

/**
 * The purpose of this file is to display how JS actually passes object references by value
 * rather than passing objects by reference, confirming that JS is actually a pass-by-value language
 * @author Andrew Crites <explosion-pills@aysites.com>
 * @copyright 2012
 */
function barn(foon) {
   foon = {};
   foon.foon = "barn";
}

var foon = {};
foon.foon = "foon";
barn(foon);
console.log(foon.foon);

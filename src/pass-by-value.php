<?php
/**
 * The purpose of this file is to display how PHP actually passes object references by value
 * rather than passing objects by reference, confirming that PHP is actually a pass-by-value language
 * @author Andrew Crites <explosion-pills@aysites.com>
 * @copyright 2012
 */

function barn(stdClass $barn) {
   $barn = new stdClass;
   $barn->foon = 'barn';
}

/**
 * However, php does allow you to pass symbol table aliases (called "references" in php
 * documentation, but these are not like C references).  In function definitions, this
 * allows you to overwrite the passed variable regardless of its type.
 */
function barn_(stdClass &$barn) {
   $barn = new stdClass;
   $barn->foon = 'barn';
}

$foon = new stdClass;
$foon->foon = 'foon';
barn($foon);

echo "$foon->foon\n";

barn_($foon);

echo "$foon->foon\n";
?>

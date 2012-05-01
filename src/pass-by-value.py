#!/usr/bin/python

""" The purpose of this file is to display how Python actually passes object references by value
 rather than passing objects by reference, confirming that Python is actually a pass-by-value language
 @author Andrew Crites <explosion-pills@aysites.com>
 @copyright 2012"""

def barn(foon):
   foon = type('lamdaobject', (object,), {})()
   foon.foon = 'barn'

if __name__ == "__main__":
   foon = type('lamdaobject', (object,), {})()
   foon.foon = 'foon'
   barn(foon)
   print foon.foon

#!/usr/bin/ruby

# The purpose of this file is to display how PHP actually passes object references by value
# rather than passing objects by reference, confirming that PHP is actually a pass-by-value language
# @author Andrew Crites <explosion-pills@aysites.com.com>
# @copyright 2012

class Foon
   attr_accessor :foon

   def self.foon(foon)
      foon = Foon.new
      foon.foon = "barn"
   end
end

foon = Foon.new
foon.foon = "foon"
Foon.foon(foon)
puts foon.foon

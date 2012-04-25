/**
 * The purpose of this file is to display how Java actually passes object references by value
 * rather than passing objects by reference, confirming that Java is actually a pass-by-value language
 * @author Andrew Crites <explosion-pills@aysites.com>
 * @copyright 2012
 */

public class PassByValue {
  public static void main(String [] args) {
    Foon foon = new Foon("foon");
    Foon.barn(foon);
    System.out.println(foon);
  }
}

class Foon {
  private String foon;

  public Foon(String foon) {
    this.foon = foon;
  }

  public static void barn(Foon foon) {
    foon = new Foon("barn");
  }

  public String toString() {
    return foon;
  }
}

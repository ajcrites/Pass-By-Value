#Pass-By-Value (1.0)

Pass-By-Value is a project that showcases how many popular languages pass everything by value.

##Purpose

It is common to say that most modern languages pass primitives by value and objects by reference,
but this is in fact incorrect.

Instead, *object references* are created and stored in variables upon object initialization.
These references themselves are passed by value.

Pass-By-Value will hopefully dispel the myth that certain languages have pass-by-reference
paradigms when in fact they do not.  This belief is harmful to the development community.

##Contributing

Feel free to contribute another language or fix a problem with an existing language.  The problem should
be showcased in your example.

1. Create a file of the specified language.  It should create an instance of an object (anonymous, if convenient)
 1. This object should have a member with a distinct string, typicically "foon," and it should be able to print this.
1. The instance should be passed to a method or function called `barn`
1. The `barn` method should overwrite the argument with a new instance, this time one that prints a separate distinct string, e.g. "barn"
1. In your main code, emit the value of the instance


###Pseudocode Example

    foon := new Object;
    foon.foon := "foon"

    def func barn(Object foon):
      foon := new Object
      foon.foon := "barn"

    barn(foon)
    print foon

The resulting code will print `"foon"`.  If the language were indeed pass-by-reference, it would print `"barn"`.

You will notice that "foon" is printed and not "barn" indicating that the _object reference_ was passed by value.
The variable instance itself was not passed by reference.

Also feel free to show any quirks that can get around this (such as the PHP ability to create symbol table aliases).

## License

No license.  Use and distribute as needed.

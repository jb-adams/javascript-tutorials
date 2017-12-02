"use strict";

let result;

//result = "" + 1 + 0 //my guess: "10" (string) -> CORRECT
//result = "" - 1 + 0 //my guess: -1 (number) -> CORRECT
//result = true + false //my guess: true (bool) -> INCORRECT (1 number)
//result = 6 / "3" //my guess: 2 (number) -> CORRECT
//result = "2" * "3" //my guess: 6 (number) -> CORRECT
//result = 4 + 5 + "px" //my guess: "9px" (string) -> CORRECT
//result = "$" + 4 + 5 //my guess: "$45" (string) -> CORRECT
//result = "4" - 2 //my guess: 2 (number) -> CORRECT
//result = "4px" - 2 //my guess: NaN (number) -> CORRECT
//result = 7 / 0 //my guess: undefined (number) -> INCORRECT (infinity number)
//result = "  -9\n" + 5 //my guess: "   -9\n5" (string) -> CORRECT
//result = "  -9\n" - 5 //my guess: NaN (number) -> INCORRECT (-14 number)
//result = null + 1 //my guess: 1 (number) -> CORRECT
//result = undefined + 1 //my guess: undefined (number) -> INCORRECT (NaN number)

alert(typeof result);
alert(result);

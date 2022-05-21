//Arithmetic Operator

function add() {
var x = 10;
var y = 2;
var z1 = x + y;

document.getElementById("Ans1").innerHTML = z1;
}

function sub() {
var x = 10;
var y = 2;
var z2 = x - y;

document.getElementById("Ans2").innerHTML = z2;
}

function mul() {
var x = 10;
var y = 2;
var z3 = x * y;

document.getElementById("Ans3").innerHTML = z3;
}

function division() {
var x = 10;
var y = 2;
var z4 = x / y;

document.getElementById("Ans4").innerHTML = z4;
}

function mod() {
var x = 10;
var y = 2;
var z5 = x % y;

document.getElementById("Ans5").innerHTML = z5;
}

function increment() {
var x = 10;
var z6 = ++x;

document.getElementById("Ans6").innerHTML = z6;
}

function decrement() {
var x = 10;
var z7 = --x;

document.getElementById("Ans7").innerHTML = z7;
}

//Assignment Operator

function Assignment_op1() {
var a1 = 5;

document.getElementById("aa1").innerHTML = a1;
}

function Assignment_op2() {
var a2 = 5;
var a2 = a2 + 5;

document.getElementById("aa2").innerHTML = a2;
}

function Assignment_op3() {
var a3 = 5;
var a3 = a3 - 5;

document.getElementById("aa3").innerHTML = a3;
}

function Assignment_op4() {
var a4 = 5;
var a4 = a4 * 5;

document.getElementById("aa4").innerHTML = a4;
}

function Assignment_op5() {
var a5 = 5;
var a5 = a5 / 5;

document.getElementById("aa5").innerHTML = a5;
}

function Assignment_op6() {
var a6 = 5;
var a6 = a6 | 5;

document.getElementById("aa6").innerHTML = a6;
}

function Assignment_op7() {
var a7 = 5;
var a7 = a7 ^ 5;

document.getElementById("aa7").innerHTML = a7;
}

function Assignment_op8() {
var a8 = 5;
var a8 = a8 << 5;

document.getElementById("aa8").innerHTML = a8;
}

function Assignment_op9() {
var a9 = 5;
var a9 = a9 << 5;

document.getElementById("aa9").innerHTML = a9;
}

//Comparison Operator

function comparison_op1() {
var c1 = 5;

document.getElementById("cc1").innerHTML = (c1 == 5);
}

function comparison_op2() {
var c2 = 5;
var c2 === 5;

document.getElementById("cc2").innerHTML = c2;
}

function comparison_op3() {
var c3 = 5;
var c3 != 5;

document.getElementById("cc3").innerHTML = c3;
}

function comparison_op4() {
var c4 = 5;
var c4 !== 5;

document.getElementById("cc4").innerHTML = c4;
}

function comparison_op5() {
var c5 = 5;
var c5 > 5;

document.getElementById("cc5").innerHTML = c5;
}

function comparison_op6() {
var c6 = 5;
var c6 < 5;

document.getElementById("cc6").innerHTML = c6;
}

function comparison_op7() {
var c7 = 5;
var c7 >= 5;

document.getElementById("cc7").innerHTML = c7;
}

function comparison_op8() {
var c8 = 5;
var c8 <= 5;

document.getElementById("cc8").innerHTML = c8;
}
}
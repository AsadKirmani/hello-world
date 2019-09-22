function add() {
    var a,b,sum;
    a = Number(document.getElementById("input1").value);
    b = Number(document.getElementById("input2").value);
    sum = a + b;
    document.getElementById("output").innerHTML=
    (a) + " + " + (b) + " = " + sum;
}
function sub(){
    var a,b,sub;
    a = Number(document.getElementById("input1").value);
    b = Number(document.getElementById("input2").value);
  sub = a-b;
  document.getElementById("output").innerHTML=
  (a) + " - " + (b) + " = " + sub;
}
function mul(){
    var a,b,mul;
    a=Number(document.getElementById("input1").value);
    b=Number(document.getElementById("input2").value);
    mul=a*b;
   document.getElementById("output").innerHTML=
   (a) + " * " + (b) + " = " + mul;
}
function show(){
    document.getElementById("nav").classList.toggle("mask");
    document.getElementById("nav").classList.toggle('active');
}

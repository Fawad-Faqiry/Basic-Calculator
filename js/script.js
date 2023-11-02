$(document).ready(function () {
  // Write on input
  $("#zero").click(function () {
    document.forms.display.value += 0;
  });
  $("#one").click(function () {
    document.forms.display.value += 1;
  });
  $("#two").click(function () {
    document.forms.display.value += 2;
  });
  $("#three").click(function () {
    document.forms.display.value += 3;
  });
  $("#four").click(function () {
    document.forms.display.value += 4;
  });
  $("#five").click(function () {
    document.forms.display.value += 5;
  });
  $("#six").click(function () {
    document.forms.display.value += 6;
  });
  $("#seven").click(function () {
    document.forms.display.value += 7;
  });
  $("#eight").click(function () {
    document.forms.display.value += 8;
  });
  $("#nine").click(function () {
    document.forms.display.value += 9;
  });
  $("#divide").click(function () {
    document.forms.display.value += "/";
  });
  $("#multi").click(function () {
    document.forms.display.value += "*";
  });
  $("#subs").click(function () {
    document.forms.display.value += "-";
  });
  $("#add").click(function () {
    document.forms.display.value += "+";
  });
  $("#clear").click(function () {
    document.forms.display.value = "";
  });
  $("#dot").click(function () {
    document.forms.display.value += ".";
  });

  // oprations
  $("#equal").click(function () {
    if (display.value == "") {
      document.forms.display.value = "";
      alert("Please Enter numbers!");
    } else {
      let result = eval($("#display").val());
      document.forms.display.value = result;
    }
  });
});

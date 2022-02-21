"use strict";
//д.з 6.7_3
// 1.Реализовать функцию copy(list) по копированию массива.
// 2.Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива - функция применится к каждому элементу 
// копируемого массива. 
// newL = copy(list, function(value){ return value*10; })

// debugger
var numbers = [0, 1, 2, 5, 10];

function copy(list/*,f*/) {
  var newL = []; 

  for (let i = 0; i < list.length; i++) {
    newL[i] = list[i];
    // newL[i] = f(list[i]); //если вторым аргументом зайдет функция

  }
  console.log(arguments);
  console.log(newL);
  return newL;
}

var f = function (value) {
  return value * 10;
}


var cube = copy(numbers,f);
console.log(cube);
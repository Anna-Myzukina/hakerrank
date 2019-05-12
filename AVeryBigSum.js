/*
Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

ar: an array of integers .
Input Format

The first line of the input consists of an integer . 
The next line contains  space-separated integers contained in the array.
*/

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((a, b) => BigInt(a) + BigInt(b));
}




/*   Cтрелочная функция     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // Это выражение вернет массив [8, 6, 7, 9]

// Функцию выше можно записать как стрелочную функцию:
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Если единственным оператором в выражении стрелочной функции является return,
// можно удалить return и окружающие фигурные скобки

elements.map(element => element.length); // [8, 6, 7, 9]

// В данном случае, поскольку нам нужно только свойство length, мы можем использовать деструктуризированный параметр:
// Обратите внимание, что строка `"length"` соответствует свойству, которое мы хотим получить,
// в то время как `lengthFooBArX` это просто имя переменной, которую можно назвать как вы хотите
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Это задание деструктуризированного параметра может быть записано, как показано ниже. Тем не менее, обратите внимание,
// что нет строки `"length"`, чтобы выбрать, какое свойство мы хотим получить. Вместо этого в качестве свойства,
// которое мы хотим извлечь из объекта, используется само литеральное имя переменной `length`
elements.map(({ length }) => length); // [8, 6, 7, 9]



*/


/*
.reduce()

Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), 
сводя его к одному значению


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15



*/

"use strict";

//1
let x  = 5; 
alert( x++ ); // выведет 5 потому что сначала произойдет вывод а потом уже ++

//2
console.log(typeof([] + false)); // в такой операции когда мы плюсуем пустой массив то он превращается в строку,
// а мы помним что при конкатынации строки с чем-то будет строка "false"
console.log("false" - null); // будет Nan (Not a Number это то специальное значение которое получается при выполнении
// не математических операций, у Nan - тип number)
console.log(Nan + true); // будет тот че Nan

console.log([] + false - null + true); // выведет Nan

//3
let i = 1;
let j = i = 2;
alert(j); // выведет 2

//4
console.log([] + 1 + 2); // будет строка "12"

//5
alert("1"[0]); // выведет строка "1", потому что у нас строка состоит из одного символа, и мы через квадратные скобки
// обращаемся к нулевому элементу строки

//6
console.log(2 && 1); // в консоль выведет последнее значение то есть 1, он читает так, 2=true пошло дальше 1=true вывело
console.log(2 && 1 && -1); // по той же схеме выведет последнее значение
console.log(2 && 1 && -1 && 0 && 4); // выведет 0, оно типа как крашется на ноле

console.log(2 && 1 && 0 && null); // так же крашется на ноле
console.log(2 && 1 && 5 && null && 1 && 0); // выведет null, оно крашется на nul, сразу херачит return
console.log(1 && 4 && undefined && 0); // выведет undefine на нем, сразу крашется и кидает return
// это все происходит из-за того, что && оператор запинается на лжи, -1 -20 2 5  это все true, но как только встречается
// значение 0, null, undefind, все это значит fasle и оно просто-на-просто дальше не пойдет
// А оператор || запинается на правде

//7
// Есть ли разница между выражениями? !!(a && b) и (a && b)
console.log(!!(1 && 2) === (1 && 2)); // выведет falsе потому что они не равны, так как !!это переобразовывает в bool
// то есть ответ разница конечно есть

console.log(null || 1 && 3 || 4 ); // выведет 3, так как приоретет оператора && выше чем приоритет оператора ||, и они
// || даже не сработают, потому что когда у нас два объекта при логическом сравнении равны, то есть оба true,
// то у нас он будет возвращать последнее значение, но если бы у нас в логическои && сравнении один был бы false, то
// дальше бы оно сравнивало следующий элемент то есть этот false и 4, а 4 - это true, и вывело бы 4

//8
const a = [1,2,3], b = [1,2,3];
console.log(a == b); // они не равны потому что это разные хранилища данных и они содержат разну инфу, если бы мы
// сравнивали по значениям то оно были бы равны

//9
console.log(+"infinity"); // выведет infinity но тип данных уже буед тстрока, так как там унарный +

//10
console.log("Ёжик" > "Яблоко"); // выведет false потому что если сравнивать строки, у нас будет происходить посимвольное
//сравнение то есть сначала будет сравниваться там первая буква Ё и там Я потом вторая ж и б и тд ну это уже особенности
// юникода, надо открывать таблицу с символами и посмотреть какие буквы на каких местах находятся, но если слово меньше,
// можно даже не проверять, так как например тут он сравнит только 4 буквы а потом будет постоянно fals и в конечном
// итоге выведет последний false

//11
console.log(0 || "" || 2 || undefined || true || false ); //выведет два, потому что проверка всегда идет слева на право,
// а мы помним, что оператор || - запинается на правде















// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// function arrayFill(el, length) {
//     arr=[];
//     for (let i = 0; i<length; i++) {
//         arr.push(el)
//     }
// }
// arr('x', 5);
// console.log(arr);
//
// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num) {
    if (num>0 && num<10){
        return true;
    } else return false
}
// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
let isEven = (num) => num%2 ? false: true;
// 4) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
arr=[];
for ( let i = 0; i<10; i++){
    arr.push(i)
}
let arr2 = arr.filter(isEven);

// 5) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
function stage(a,b) {
    let result = a**b;
    return result
}
// console.log(stage(2, 8));
// 6) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
// let age = (age) => age>16? alert('Добро пожаловать'): alert("Вы еще молоды");
// age(+prompt("Введите возраст"))
// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
let age = (age) => age===undefined || age ==="" ? alert('Ввeдите возраст'): age>16? alert('Добро пожаловать'):alert("Вы еще молоды");
// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
function ucFirst(str) {
    if(!str) return str
        return str[0].toUpperCase()+str.slice(1)
}
function split(str) {
    str.split("")
    for (let i = 0; i<str.length; i++){
        let str1= ucFirst(i)
    }
}

console.log(split('gghhg ghhghgh ghghhg'))
//
// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)
//
// 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск Функция должна возвращать true или false.
// //     в котором делается поиск. Ф.ункция должна возвращать true или false.
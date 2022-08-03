//
// // 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// let index;
// let arr4 = [];
// for (index = 0; index < arr1.length; ++index) {
//     arr4.push(arr1[index]);
//     arr4.push(arr2[index]);
// }
// console.log(arr4);
// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)
// const arr1 = ['a', 'b', 'c'];
// arr1.push("1", "2","3");
// console.log(arr1);
// const arr2 = ['a', 'b', 'c'];
// arr2.splice(3, 0, "1", "2","3");
// console.log(arr2);
// 3) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const arr1=[1, 2, 3, 4, 5];
// arr1.splice(1,2);
// console.log(arr1);
// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const arr1=[1, 2, 3, 4, 5];
// arr1.splice(3, 0, "a", "b", "c");
// console.log(arr1);
// 5) Дан массив const arr = [1, 2, 3, 4, 5]. Создать новый пустой массив arr1. Обойти массив arr через цикл for, каждый элемент массива arr умножить на 10 и результат положить в массив arr1.
// const arr = [1, 2, 3, 4, 5];
// arr1=[];
// let index;
// for (index = 0; index<arr.length; ++index){
//     arr1.push(arr[index]*10)
// }
// console.log(arr1);
// 6) Вывести числа от 4 до 400 на экран// .
// let number;
// for (number = 4; number<=400; number++){
//     console.log(number)
// }
// 7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
// let number;
// for (number = 4; number<=13; number+=3){
//     console.log(number)
// }
// 8) Вывести числа 654 653 652 до нуля.
// let number;
// for (number = 654; number>=0; number--){
//     console.log(number)
// }
// 9) Вывести все годы с 1983 до 2017.
// let number;
// for (number = 1983; number<=2017; number++){
//     console.log(number)
// }
// 10) Вывести числа -4 -2 0 2 4 6 ...100.
// let number;
// for (number =-4; number<=100; number+=2){
//     console.log(number)
// }
// 11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)
// let sum = 0;
// for (let i = 0; i<=100; i++){
//     sum = sum + i;
//     console.log(sum)
// }
// 12) Заполните массив следующим образом: в первый элемент запишите 'x',
//     во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
// let arr =[];
// let str  = 'x';
// length = +prompt("");
// for (let index=0; index<length; index++){
//     arr.push(str);
//     str+='x';
// }
// console.log(arr)

// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.
// let arr =[];
// let i;
// length = +prompt("");
// for (let index=1; index<length; index++){
//     arr.push(index.toString().repeat(index))
// console.log(arr);
// 14*) нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )
// ['x', 'x', 'x', 'x', 'x' 'x', 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 'x', 'x', 'x', 'x', 'x','x']

// let matrix = [];
// let x = [];
// for ( let i = 0; i < 10; i++){
//     const arr = [];
//     for ( let j = 0; j<10; j++){
//         let el = i === 0|| i === 9 || j === 9 || j === 0 ? 'x' : 0;1
//     arr.push(el)
// }
//     matrix.push(arr);
// }
//     console.log(matrix);
//

// 15*) нарисовать матрицу (таблица умножения)
// 0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// 2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
// 4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
// 6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
// 7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
// 8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
// 9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let matrix = [];
// let x = [];
// for ( let i = 1; i <= 10; i++){
//     const arr = [];
//     for ( let j = 1; j<=10; j++){
//         let el = i*j;
//     arr.push(el)
// }
//     matrix.push(arr);
// }
//     console.log(matrix);

// 16*)	Написать программу которая будет склонять слово
// 	“товар” в зависимости от количества товаров в корзине.
//     Например 1 - товар, 4 - товара, 6 - товаров.
sequence = + prompt('skoka nnada');
if(sequence % 10 > 4 && sequence % 10 < 20){
    console.log(`${sequence} товаров`)
} else if(sequence % 10 === 1 && sequence % 100 !== 11) {
    console.log(`${sequence} товар`)
}else if ( sequence % 10 >= 2 && sequence % 10 <= 4) {
    console.log(`${sequence} товара`)
}else{
    console.log(`${sequence} товаров`)
}

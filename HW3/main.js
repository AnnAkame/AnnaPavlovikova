//
// // 1 - Создать переменную каждого типа данных.
// {
//     let a = 1;
//     let b = "1";
//     let bigInt = 222233333332n;
//     let c = true;
//     let d = null;
//     let e = Symbol();
//     let i;
//     let f = {name: "Hera", age: 3};
// }
// // 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
// {
//     var g = 3;
//     g = 4;
// }
// {
//     let a = 3;
//     a = 4;
// }
// {
//     const a = 1;
// }
//
// // 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).
// {
//     String(123);
//     String(Symbol);
//     String(true);
//     String(null);
//     String(undefined);
//     Number("1");
//     Number(true);
//     Number(null);
//     Number(undefined);
//     Boolean("1");
//     Boolean(Symbol);
//     Boolean(5);
//     Boolean(null);
//     Boolean(undefined);
//     let a = +"123";
//     !!Symbol();
//     let b = parseInt("767");
//     let c = parseFloat("123");
// }
//
// // 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.
//     let a = 1;
//     let b = "1";
//     let bigInt = 222233333332n;
//     let c = true;
//     let d = null;
//     let e = Symbol(5);
//     let i;
//     let f = {name: "Hera", age: 3};
// console.log(a+b);
// console.log(a+c);
// console.log(a+d);
// console.log(a+i);
// console.log(a+f);
// console.log(b+b);
// console.log(b+c);
// console.log(b+d);
// console.log(b+i);
// console.log(b+f);
//
// // 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
// console.log(a-b);
// console.log(a-c);
// console.log(a-d);
// console.log(a-i);
// console.log(a-f);
// console.log(b-b);
// console.log(b-c);
// console.log(b-d);
// console.log(b-i);
// console.log(b-f);
//
// // 6 - Задача (Условный оператор)
// // Пользователь вводит логин и пароль.
// //     Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
// // то выводится «Добро пожаловать». Если не совпадают –
// //  то «Ошибка входа».
//
//     // let login = prompt('Login');
//     // let parol = prompt('Parol');
//     // if (login === 'kykold' && parol === '1234asdQQ') {
//     //     alert("Добро пожаловать")
//     // } else {
//     //     alert("Ошибка входа")
//     // }
//
// // 7 - Задача (Условный оператор)
// // Пользователь вводит год рождения. Программа показывает количество
// // лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// // если нет – «вход воспрещен».
//     let year = +prompt('Введите год рождения');
//     let age = 2022 - year;
//     if ( age>=16){
//         alert("Добро пожаловать")
//     } else {
//         alert('Вход воспрещен')
//     }
// // 8 - Задача (Условный оператор)
// // Создайте программу, которая выводит надбавку за стаж.
// // //     Пользователь вводит стаж работы, а программа пишет ему надбавку.
//     let experience = +prompt("Your experience");
//     if (experience <= 5 && experience!==0){
//         console.log('10%')
//     } else if (experience <= 10 && experience!==0) {
//         console.log('15%')
//     }else if (experience===0){
//         console.log('shlyapa')
//     } else{
//     console.log('20%')
//     }
// // 9 - Задача (Условный оператор и свитч кейс)
// // Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)

// // 9.1 Решить на иф елсах
//     let day = +prompt('Choose day');
//     if (day ===1){
//     console.log('Monday')
//     }if (day ===2){
//     console.log('Tuesday')
//     }if (day ===3){
//     console.log('Wednesday')
//     }if (day ===4){
//     console.log('Thursday')
//     }if (day ===5){
//     console.log('Friday')
//     }if (day ===6){
//     console.log('Saturday')
//     }if (day ===7){
//     console.log('Sunday')
// }
// // 9.2 Решить на свитч кейсе
//      let day = +prompt('Choose day');
//         switch (day){
//             case 1:
//             console.log('Monday');
//             break;
//         case 2:
//             console.log('Tuesday');
//             break;
//         case 3:
//             console.log('Wednesday');
//             break;
//         case 4:
//             console.log('Thursday');
//             break;
//         case 5:
//             console.log('Friday');
//             break;
//         case 6:
//             console.log('Saturday');
//             break;
//         case 7:
//             console.log('Sunday');
//             break;
//             default:
//                 console.log('nema tyta');
//         }

// // 9.3 Решить на тернарном операторе
//         let day = +prompt('Choose day');
//         let dayOfWeek = (day===1) ? 'Monday':
//             (day===2) ? 'Tuesday' :
//                 (day===3) ? "Wednesday":
//                     (day === 4) ? "Thursday":
//                         (day === 5) ? "Friday" :
//                             day === 6 ? "Saturday" :
//                                 day === 7 ? "Sunday" : 'nema tyta';
//
//         alert(dayOfWeek);

// // 10 - Задача (Условный оператор)
// // Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// //     1, если значение больше нуля,
// //     -1, если значение меньше нуля,
// // //     0, если значение равно нулю.
// let number = +prompt('Number');
// if ( number >0 ){
//     alert (1)
// }else if ( number < 0 ){
//     alert(-1)
// } else if (number ===0 ){
//     alert(0)
//     }
// // 11 - Задача (Тернарный оператор)
// // Перепишите if..else с использованием нескольких операторов '?'.
// //
// //     let message;
// //
// // if (login == 'Сотрудник') {
// //     message = 'Привет';
// // } else if (login == 'Директор') {
// //     message = 'Здравствуйте';
// // } else if (login == '') {
// //     message = 'Нет логина';
// // } else {
// //     message = '';
// // }
// let login = prompt('Who are you?');
// let message = (login==="Сотрудник") ? 'Привет':
//     (login==="Директор") ? 'Здравствуйте':
//         login === "" ? "Нет логина": "";
// alert(message);
// // 12 - Задача (Условный оператор)
// // В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// // Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
// let home = + prompt("Where do you need?");
// if (home>=1 && home <=20 ){
//     console.log(1)
// } else if ( home>=21 && home <=48) {
//     console.log(2)
// } else if ( home>=49 && home <= 90) {
//     console.log (3)
// } else{
//     console.log('nety tyta')
// }

// //
// // 13 - Задача (Условный оператор)
// // Напишите if..else, соответствующий следующему switch:
// //
// //     switch (browser) {
// //         case 'Edge':
// //             alert( "You've got the Edge!" );
// //             break;
// //
// //         case 'Chrome':
// //         case 'Firefox':
// //         case 'Safari':
// //         case 'Opera':
// //             alert( 'Okay we support these browsers too' );
// //             break;
// //
// //         default:
// //             alert( 'We hope that this page looks ok!' );
// //     }
// let browser = prompt('Chooce your browser');
// if ( browser === 'Edge'){
//     alert("You've got the Edge!")
// }  else if ( browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' ||browser === 'Opera'){
//     alert( 'Okay we support these browsers too' );
// } else{
//     alert( 'We hope that this page looks ok!' );
// }
// //     14 - Задача (свитч кейс)
// //     Переписать условия "if" на "switch"
// //     важность: 4
// //     Перепишите код с использованием одной конструкции switch:
// //
// //         const number = +prompt('Введите число между 0 и 3', '');
// //
// //         if (number === 0) {
// //             alert('Вы ввели число 0');
// //         }
// //
// //         if (number === 1) {
// //             alert('Вы ввели число 1');
// //         }
// //
// //         if (number === 2 || number === 3) {
// //             alert('Вы ввели число 2, а может и 3');
// //         }
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}
// //
// //
// //
// //
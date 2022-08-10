// DeadLine: 11.08.2022
//
// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.
 class Human {
     constructor(height, weight, name, birthdayYear, gender, disability) {
         this.height = height;
         this.weight = weight;
         this.name = name;
         this.birthdayYear = birthdayYear;
         this.gender = gender;
         this.disability = disability;
     }
     get getInfo(){
         return  {
             height:this.height,
             weight:this.weight,
             name:this.name,
             birthdayYear:this.birthdayYear,
             gender:this.gender,
             disability:this.disability,
         };

     }
     get sayHello() {
         return `Привет, меня зовут ${this.name}`
     }
     set newName(name){
         this.name = name
     }
     set newDisability(disability){
         this.disability = disability
     }
 }
 const Human1 = new Human(13, 3, 'Anna', new Date(2010, 11));
Human1.newDisability = true;

// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель
class frontEndDeveloper extends Human {
    money = [];

    constructor(height, weight, name, birthdayYear, gender, disability, startCarier, experience) {
        super(height, weight, name, birthdayYear, gender, disability);
        this.startCarier = startCarier;
        this.experience = experience;

    }

    set newExperience(experience) {
        this.experience = experience
    }
    set addExperience(experience) {
       return {
           ...this.experience.push(experience)
       }
}
    get getInfo() {
        return {
            ...super.getInfo,
            startCarier: this.startCarier,
            experience: this.experience,
        }
    }

    get sayHello() {
        return super.sayHello + `, я Фронтенд разработчик, работаю с ${this.startCarier}`
    }

    fullmoney() {
       let a =  this.experience.map((element) => {
            let time = Math.round((element.end - element.start)/ (1000 * 60* 24 * 60  * 30)) * element.salaryPerMonth;
            return time
        }
        );
return a.reduce((acc , sum) =>  acc + sum, 0);

        // return Math.round((this.experience[0].end - this.experience[0].start) / (1000 * 60* 24 * 60  * 30)) * this.experience[0].salaryPerMonth +
        //     Math.round((this.experience[1].end - this.experience[1].start) / (1000 * 60 * 60 * 24 * 30)) * this.experience[1].salaryPerMonth;

    }
    workHistory(company){
      let a =  this.experience.filter ((element) => {
         return  element.companyName === company
        })
return a
    }
}

const Vova= new frontEndDeveloper(160, 60, 'Vova', new Date(2000, 11), 'male', false, new Date( 2018, 1));

Vova.newExperience =  [{
        start: new Date('11-15-2018'),
        end: new Date('12-04-2019'),
        salaryPerMonth: 1000,
        position: 'middle',
        companyName: 'Oracle',
},
    {
       start: new Date(2019,1),
        end: new Date(2022, 8),
        salaryPerMonth: 3000,
        position: 'senior',
        companyName: 'Karamba',
    }];
Vova.addExperience = [{
    start: 333333333
}]


class Builder extends Human {
    constructor(height, weight, name, birthdayYear, gender, disability, location, tools, speed) {
        super(height, weight, name, birthdayYear, gender, disability);
        this.location = location;
        this.tools = tools;
        this.speed = speed;
    }
    buildHouse(work){
       let time = this.speed*work;
        if (time<1440) {
            let hour = Math.round(time / 60);
            return (`${hour} ч.`)
        } else if ( time < 10080){
            let day = parseInt(time / 60 / 24);
            let hour = parseInt(time / 60 % 24) ;
            return (`${day} д. ${hour} ч.`);
        } else if ( time < 43200){
            let week =parseInt(time/60/24/7);
            let day = parseInt(time / 60 / 24 % 7);
            let hour = parseInt(time / 60 % 24) ;
            return (`${week} н. ${day} д. ${hour} ч.`);
        } else if ( time < 525600){
            let month = parseInt( time / 60 / 24 / 7 / 4);
            let week =parseInt(time/60/24/7%4);
            let day = parseInt(time / 60 / 24 % 7);
            let hour = parseInt(time / 60 % 24) ;
            return (`${month} м. ${week} н. ${day} д. ${hour} ч.`);
        }else if ( time > 525600){
            let year = parseInt(time/525600)
            let month = parseInt( time / 60 / 24 / 7 / 4 % 12);
            let week =parseInt(time/60/24/7%4);
            let day = parseInt(time / 60 / 24 % 7);
            let hour = parseInt(time / 60 % 24) ;
            return (`${year} г. ${month} м. ${week} н. ${day} д. ${hour} ч.`);
        }




    }}
const Prorab = new Builder(150,50,'Prorab', new Date ("20-10-2003"), 'male',
    true, "XTZ", ['сверло','kaban'],  50);
console.log(Prorab.buildHouse(50000))

// 1.3) Класс Фронтенд разработчик:
//     Добавить доп. свойства:
// - начало карьеры(формат Date),
// - предыдущие компании(массив объектов
// {
//     start: new Date(),
//         end: new Date(),
//     salaryPerMonth: number,
//     position: 'middle' или 'junior' или 'senior',
//     companyName: 'Oracle',
// })
// Добавить доп. методы:
// - изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// - добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
//     высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
//     в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// - добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// - возможность добавить компанию в массив предыдущих компаний по примеру объекта выше

// 1.4) Класс Строитель:
//     Добавить доп. свойства:
// - локация строительного объекта(строка)
// - набор инструментов (массив строк ['кирка', 'топор'])
// - скорость выполнения работы на один квадратный метр (количество минут - number)
// Добавить доп. методы:
// - метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// если меньше одного дня - показать количество часов
// если больше одного дня - показать количество дней и часов
// если больше недели - показать количество недель дней и часов
// если больше месяца - показать количество месяцев недель дней и часов
// если больше года - показать количество лет месяцев недель дней и часов
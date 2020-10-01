// developers - авторя ЯП
// name - имя автора

// const { get } = require("browser-sync");

// work - род деятельности автора
const developers = [
    {
        index:0,
        name:"Брендан Эйх",
        work: "специалист в области информатики, программист, технический директор"
    },
    {
        index:2,
        name: "Джеймс Гослинг",
        work: "специалист в области информационных технологий"
    },
    {
        index:3,
        name: "Бьёрн Страуструп",
        work: "программист"
    }
]



// data - ЯП про которые должны быть рассказы
// name - название ЯП
// year - год выпуска ЯП
// filenameExtensions -расширения файлов
// influencedBy - ЯП оказавшие влияние
// affectedBy - ЯП испытавшие влияние ЯП
// developerIndex - уникальный идентификатор автора языка программирования
const data = [
    {
        name:"JavaScript",
        year: 1995,
        filenameExtensions: "js, mjs",
        influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
        affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
        developerIndex:0,
    },
    {
        name:"Java",
        year: 1995,
        filenameExtensions: "java, class, jar, jad, jmod",
        influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
        affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
        developerIndex: 2,
    },
    {
        name:"C++",
        year: 1983,
        filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
        influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
        affectedBy: ["Ada", "C", "Modula-2", "Simula"],
        developerIndex: 3,
    },
];

function Timer (timer) { 
    let time=timer;
    return function getTimer() {
    time--
        if (time < 0) {
            return clearTimeout(timer)
        }  
    console.log(time + '...')
    }
}

function getInformation() {
    for (let item of developers) {

        let index = item.index;
        let author = item.name;
        let workAuthor = item.work;
    
        dateIndex = data.findIndex(item => item.developerIndex===index);
    
        let nameLg = data[dateIndex].name;
        let dateStart = data[dateIndex].year;
        let fileExtension = data[dateIndex].filenameExtensions;
        let manyInfluenced = (data[dateIndex].influencedBy).length;
        let influencedList = (data[dateIndex].influencedBy).join(', ');
        let affectedList = data[dateIndex].affectedBy;
        if  (affectedList <= 4) {
            affectedList = data[dateIndex].affectedList.join(', ')
        }
        else {
            affectedList=affectedList.slice(0,4);
            affectedList = affectedList.join(', ') + ' и другие языки программирования';
        }
    
        console.log(`${nameLg} - язык программирования выпущенный в ${dateStart} году.
        Автором языка стал ${author} - ${workAuthor}.
        Файлы программ, Написанных на ${nameLg}, могут иметь расширения ${fileExtension}.
        ${nameLg} испытал влияние ${manyInfluenced} языков программирования: ${influencedList}.
        ${nameLg} повлиял на ${affectedList}
        `)
    }
}

let startTimer = Timer(11);
console.log('Данные отобразятся через:');
setTimeout(function(){getInformation()}, 12000);
let timeIsOver= setInterval (startTimer, 1000);








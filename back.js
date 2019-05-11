var Car = {
    engine: 'V8',
    runEngine: function () {
        alert(`running${this.name}`)
    }
};

var BMW = {
    name: 'BMW'
}

var AUDI = {
    name: 'AUDI'
}

AUDI.__proto__ = Car;

var ar = ['Serg'];
ar.__proto__=null;

ar.push = function (){
    console.log(this);
}

ar.push('name');

//console.log (ar);



var ar = ['Vasa'];

var Parent = [];

Parent.myFor = function () {
    console.log('hi');
}

ar.__proto__ = Parent;

ar.myFor();

console.log(ar);




function Parent() {
    this.article = '14488';
    this.show = function(){

    }
}

function Child () {
    Parent.apply(this);
        this.name = 'Vasa';
    }

    console.log(new Child);



    class Parent {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
    
        showData(){
            alert(this.name + '  ' + this.age)
        }
    }
    
    var ob = new Parent('name', 25)
    
    console.log(ob.showData);







    class Parent {
        showData() {
            alert(this.name + '  ' + this.age)
        }
        showAge() {
            alert(this.age)
        }
    }
    
    class Child extends Parent {
        constructor(name, age) {
            super();
            this.name = name;
            this.age = age;
        }
    }
    
    var child = new Child ('Pit',55);
    child.showData();
    
    console.log(new Child('Pit',55))




    class Parent {
        constructor(name){
            this.parentName = name;
        }
        showData() {
            alert(this.name + '  ' + this.age)
        }
        showAge() {
            alert(this.age)
        }
    }
    
    class Child extends Parent {
        constructor(name, age, parentName) {
            super(parentName);
            this.name = name;
            this.age = age;
        }
    }
    
    var child = new Child ('Pit',55, '555');
    child.showData();
    
    console.log(new Child('Pit',55))





    var promise = new Promise((resolve,reject) => {
        // 1. Создаём новый объект XMLHttpRequest
        var xhr = new XMLHttpRequest();
        
        var url = "https://api.unsplash.com/photos/?page-2&per_page=18&client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c"
        
        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', url, true);
        
        // 3. Отсылаем запрос
        xhr.send();
        
        xhr.onload = function () {
            if(this.status === 200){
                resolve(this.responseText);
            } else {
                reject('error' + this.status)}
            }
        })
        
        var renderImages = function (dataHtml){
            var html = dataHtml.join('');
            document.querySelector('#images-block').innerHTML = html;
            console.log(html);
        }
        
        var htmlFormat = data => data.map(image => `<img src="${image.urls.thumb}"/>`);
        
        var jsonFormat = dataJson => JSON.parse(dataJson);
        
        promise
            .then(jsonFormat)
            .then(htmlFormat)
            .then(renderImages)
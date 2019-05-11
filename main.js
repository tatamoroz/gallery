
var inputNumPage = document.querySelector('#page-num');
var btnPrev = document.querySelector('#btn-prev');
var btnNext = document.querySelector('#btn-next');
var limitPage = document.querySelector('#limit-page');
var imagesBlock = document.querySelector('#images-block');

function sendQuery (pageNum, limit){

    imagesBlock.className = 'loading';

    var promise = new Promise((resolve,reject) => {
// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

var client_id = 'ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
var page = pageNum;
var per_page = limit;

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


var renderImages = function (dataHtml) {
    var html = dataHtml.join('');
    imagesBlock.innerHTML = html;
   

var htmlFormat = data => data.map(image => `<img src="${image.urls.small}"/>`);

var jsonFormat = dataJson => JSON.parse(dataJson);


promise
    .then(jsonFormat)
    .then(htmlFormat)
    .then(renderImages)
    .then(()=>{
        setTimeout (() => {
            imagesBlock.className = '';
        }, 1000);  
      })

}

sendQuery(1, 6);

function changePrev() {
    
    inputNumPage.value > 1
    ? inputNumPage.value -- 
    : inputNumPage.value = 1;

    sendQuery(inputNumPage, limitPage.value);
}

function changeNext() {
    inputNumPage.value ++;

    sendQuery(inputNumPage, limitPage.value);
}

function changeLimit(){
    sendQuery(inputNumPage.value, limitPage.value)
}

function changeInput(){
    if(!inputNumPage.value || inputNumPage.value < 1) return;
    sendQuery(inputNumPage.value, limitPage.value)
}

btnPrev.onclick = changePrev;
btnNext.onclick = changeNext;
limitPage.onclick = changeLimit;
inputNumPage.oninput = changeInput;
}
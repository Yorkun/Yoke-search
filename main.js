var baidu = document.querySelector('.button_baidu');
baidu.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://www.baidu.com/s?wd=' + inputValue;
    baidu.href = addHref;
})

var google =document.querySelector('.button_google');
google.addEventListener('click',function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://www.google.com/search?sxsrf=ACYBGNRZUE-YO33VVcWqh2Z1CnoBtiY_UA%3A1574244452133&ei=ZBDVXZffB4K5wAPD9aOIAQ&q=' + inputValue;
    google.href = addHref;
})

var bing = document.querySelector('.button_bing');
bing.addEventListener('click',function (){
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://www.bing.com/search?q=' + inputValue;
    bing.href = addHref;   
})

var allweb =document.querySelector('.button_allweb');
allweb.addEventListener('click', 

    


var dribbble = document.querySelector('.button_dribbble');
dribbble.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://dribbble.com/search/' + inputValue;
    dribbble.href = addHref;
})

var behance = document.querySelector('.button_behance');
behance.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://www.behance.net/search?search=' + inputValue;
    behance.href = addHref;
})

var pinterest = document.querySelector('.button_pinterest');
pinterest.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://www.pinterest.com/search/pins/?q=' + inputValue;
    pinterest.href = addHref;
})







var iconfont = document.querySelector('.button_iconfont');
iconfont.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://www.iconfont.cn/search/index?searchType=icon&q=' + inputValue;
    iconfont.href = addHref;
})

var unsplash = document.querySelector('.button_unsplash');
unsplash.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    var addHref = 'https://unsplash.com/s/photos/' + inputValue;
    unsplash.href = addHref;
})



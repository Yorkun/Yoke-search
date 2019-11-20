var baidu = document.querySelector('.button_01');
var inputValue = document.querySelector('input').value

baidu.addEventListener('click', function () {
    var addHref = 'https://www.baidu.com/s?wd=' + inputValue
    baidu.href = addHref
})


console.log(baidu.href)
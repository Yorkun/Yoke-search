var baidu = document.querySelector('.button_baidu');

baidu.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value
    var addHref = 'https://www.baidu.com/s?wd=' + inputValue
    baidu.href = addHref
})
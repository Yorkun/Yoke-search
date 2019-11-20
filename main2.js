const baidu = document.querySelector('.button_baidu');
const google = document.querySelector('.button_google');
const bing = document.querySelector('.button_bing');
const allweb = document.querySelector('.button_allweb');

const sreachArr = [
    {
        ele: baidu,
        url: 'https://www.baidu.com/s?wd='
    },
    {
        ele: google,
        url: 'https://www.google.com/search?sxsrf=ACYBGNRZUE-YO33VVcWqh2Z1CnoBtiY_UA%3A1574244452133&ei=ZBDVXZffB4K5wAPD9aOIAQ&q='
    },
    {
        ele: bing,
        url: 'https://www.bing.com/search?q='
    }
]

sreachArr.forEach(d => {
    d.ele.addEventListener('click', function () {
        var inputValue = document.querySelector('input').value;
        d.ele.href = d.url + inputValue;
    })
});

allweb.addEventListener('click',function (){
    var inputValue = document.querySelector('input').value;
    sreachArr.forEach(d => {
        window.open(d.url + inputValue)
    })
}) 



// ————————————





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



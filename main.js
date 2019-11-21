const baidu = document.querySelector('.button_baidu');
const google = document.querySelector('.button_google');
const bing = document.querySelector('.button_bing');
const allweb = document.querySelector('.button_allweb');
const dribbble = document.querySelector('.button_dribbble');
const behance = document.querySelector('.button_behance');
const pinterest = document.querySelector('.button_pinterest');
const allpic = document.querySelector('.button_allpic');
const iconfont = document.querySelector('.button_iconfont');
const unsplash = document.querySelector('.button_unsplash');
const image = document.querySelector('.button_image');

document.onkeydown = function (e) {
    var keyNum = window.event ? e.keyCode : e.which;
    if (keyNum == 13) {
        var inputValue = document.querySelector('input').value;
        window.open(sreachArr[0].url + inputValue)
    }
}

const sreachArr = [{
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

allweb.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    sreachArr.forEach(d => {
        window.open(d.url + inputValue)
    })
})

const sreachArr2 = [{
        ele: dribbble,
        url: 'https://dribbble.com/search/'
    },
    {
        ele: behance,
        url: 'https://www.behance.net/search?search='
    },
    {
        ele: pinterest,
        url: 'https://www.pinterest.com/search/pins/?q='
    }
]

sreachArr2.forEach(d => {
    d.ele.addEventListener('click', function () {
        var inputValue = document.querySelector('input').value;
        d.ele.href = d.url + inputValue;
    })
});

allpic.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    sreachArr2.forEach(d => {
        window.open(d.url + inputValue)
    })
})

const sreachArr3 = [{
        ele: iconfont,
        url: 'https://www.iconfont.cn/search/index?searchType=icon&q='
    },
    {
        ele: unsplash,
        url: 'https://unsplash.com/s/photos/'
    },
]

sreachArr3.forEach(d => {
    d.ele.addEventListener('click', function () {
        var inputValue = document.querySelector('input').value;
        d.ele.href = d.url + inputValue;
    })
})


const sreachArr4 = [{
        url: 'https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&fm=index&pos=history&word='
    },
    {
        url: 'https://www.google.com.hk/search?newwindow=1&safe=strict&hl=zh-CN&tbm=isch&sxsrf=ACYBGNSP1_41gP5pTvyBQnj6CR5Qd_Wfig%3A1574312459131&source=hp&biw=1240&bih=1329&ei=CxrWXZLeBZSu0PEP8a6FwAc&q='
    },
]

image.addEventListener('click', function () {
    var inputValue = document.querySelector('input').value;
    sreachArr4.forEach(d => {
        window.open(d.url + inputValue)
    })
})
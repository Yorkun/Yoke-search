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
const mainInput = document.querySelector('.input');
const clean = document.querySelector('.clean');

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

const sreachArr3 = [{
        ele: iconfont,
        url: 'https://www.iconfont.cn/search/index?searchType=icon&q='
    },
    {
        ele: unsplash,
        url: 'https://unsplash.com/s/photos/'
    },
]

const sreachArr4 = [{
        url: 'https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&fm=index&pos=history&word='
    },
    {
        url: 'https://www.google.com.hk/search?newwindow=1&safe=strict&hl=zh-CN&tbm=isch&sxsrf=ACYBGNSP1_41gP5pTvyBQnj6CR5Qd_Wfig%3A1574312459131&source=hp&biw=1240&bih=1329&ei=CxrWXZLeBZSu0PEP8a6FwAc&q='
    },
]


// ———————监听回车键———————

document.onkeydown = function (e) {
    var keyNum = window.event ? e.keyCode : e.which;
    if (keyNum == 13) {
        var inputValue = document.querySelector('.input').value;
        window.open(sreachArr[0].url + inputValue)
    }
}

// ———————清空表单———————

mainInput.oninput = function () {
    var inputValue = document.querySelector('.input').value;
    if (inputValue !== '') {
        clean.style.display = 'block';
    } else {
        clean.style.display = 'none';
    }
}

clean.addEventListener('click', function () {
    document.querySelector('.input').value = ''
    clean.style.display = 'none';
    mainInput.focus();
})

// ———————ALL的悬停联动———————

allweb.addEventListener('mouseenter', function () {
    sreachArr.forEach(d => {
        d.ele.classList.add('up')
    })
})
allweb.addEventListener('mouseleave', function () {
    sreachArr.forEach(d => {
        d.ele.classList.remove('up')
    })
})

allpic.addEventListener('mouseenter', function () {
    sreachArr2.forEach(d => {
        d.ele.classList.add('up')
    })
})
allpic.addEventListener('mouseleave', function () {
    sreachArr2.forEach(d => {
        d.ele.classList.remove('up')
    })
})



// ———————点击搜索———————

// list1

sreachArr.forEach(d => {
    d.ele.addEventListener('click', function () {
        var inputValue = document.querySelector('.input').value;
        d.ele.href = d.url + inputValue;
    })
});

allweb.addEventListener('click', function () {
    var inputValue = document.querySelector('.input').value;
    sreachArr.forEach(d => {
        window.open(d.url + inputValue)
    })
})

// list2

sreachArr2.forEach(d => {
    d.ele.addEventListener('click', function () {
        var inputValue = document.querySelector('.input').value;
        d.ele.href = d.url + inputValue;
    })
});

allpic.addEventListener('click', function () {
    var inputValue = document.querySelector('.input').value;
    sreachArr2.forEach(d => {
        window.open(d.url + inputValue)
    })
})

// list3

sreachArr3.forEach(d => {
    d.ele.addEventListener('click', function () {
        var inputValue = document.querySelector('.input').value;
        d.ele.href = d.url + inputValue;
    })
})

// list3-两个图片搜索

image.addEventListener('click', function () {
    var inputValue = document.querySelector('.input').value;
    sreachArr4.forEach(d => {
        window.open(d.url + inputValue)
    })
})

var switchBtn = document.querySelector('.switchBtn');

// 颜色模式切换

switchBtn.addEventListener('click', function () {
    if (document.body.className == '') {
        document.body.classList.add('dark')
        localStorage.setItem('isDark', 'true')
    } else {
        document.body.classList.remove('dark')
        localStorage.removeItem('isDark')
    }
})

if (!localStorage.getItem('isDark')) {
    document.body.classList.remove('dark')
} else {
    document.body.classList.add('dark')
    switchBtn.classList.add('moon')
}
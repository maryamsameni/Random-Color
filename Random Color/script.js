let _txt = document.querySelectorAll('.every>.one>p')
let _box = document.querySelectorAll('.every>.one>.box')
let _hex
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    for (i = 0; i < _txt.length; i++) {
        _hex = '#' + Math.random().toString(16).substring(2, 8)
        _txt[i].innerHTML = _hex
        _box[i].style.backgroundColor = _hex
    }
})

_txt.forEach((item, index) => {
    item.addEventListener('click', function () {
        navigator.clipboard.writeText(item.innerHTML)
        alert('Copy Done :D')
    })
})
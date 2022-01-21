let ham = document.querySelector('.hamburger');
let lis = document.querySelectorAll('.list-item');
let btn = document.querySelector('.btn');
ham.addEventListener('click', function () {
    Array.from(lis).forEach((element) => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
            document.querySelector('.searchpack').style.display = 'none';
        }
        else {
            element.style.display = 'block';
            document.querySelector('.searchpack').style.display = 'block';
        }
    })
})
btn.addEventListener('click', () => {
    document.querySelector('.searchpack').style.display = 'none';
    lis.forEach((element) => {
        element.style.display = 'none';
    })
});
Array.from(lis).forEach((e) => {
    e.addEventListener('click', () => {
        lis.forEach((e) => {
            e.style.display = 'none';
            document.querySelector('.searchpack').style.display = 'none';
        })
    })
})
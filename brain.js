// ====================== for manage styles ==============================//

let ham = document.querySelector('.hamburger');
let lis = document.querySelectorAll('.list-item');
let btn = document.querySelector('.btn');
// console.log(window.getComputedStyle(btn));
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        lis.forEach((e) => { e.style.display = 'block' });
        document.querySelector('.searchpack').style.display = 'block';
    }
    else {
        lis.forEach((e) => { e.style.display = 'none' });
        document.querySelector('.searchpack').style.display = 'none';
    }
    let x = window.matchMedia("(min-width:992px)");
    // let x1 = window.matchMedia("(min-width:)");
    widthCheck(x); // invoking runtime
    x.addListener(widthCheck); //set function on state change
})

document.querySelector('.navbar').addEventListener('resize', () => {
    let disp = ham.style.display;
    console.log(disp);
    if (ham.style.display === 'none') {
        lis.forEach((element) => {
            element.style.display = 'block';
        })
        document.querySelector('.searchpack').style.display = 'block';
    }
})
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
    });
});

/* let x = window.matchMedia("(min-width:992px)");
// let x1 = window.matchMedia("(min-width:)");
console.log(x);
widthCheck(x); // invoking runtime
x.addListener(widthCheck); //set function on state change */
function widthCheck(x) {
    if (x.matches) {
        btn.addEventListener('click', () => {
            document.querySelector('.searchpack').style.display = 'block';
            lis.forEach((element) => {
                element.style.display = 'block';
            })
        });
        Array.from(lis).forEach((e) => {
            e.addEventListener('click', () => {
                lis.forEach((e) => {
                    e.style.display = 'block';
                    document.querySelector('.searchpack').style.display = 'block';
                })
            })
        })
    }
    else{
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
    }
}

// ==================== for taking in work ==================== //

// Themes 
// light mode
let light = document.querySelector('.dropdown-content a').nextElementSibling;
light.addEventListener('click',()=>{
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.getElementsByTagName('body')[0].classList.remove('backdark');
    document.querySelector('.divider').classList.remove('divider-dark');
    document.querySelector('.startup').classList.remove('startup-dark');
    Array.from(document.querySelectorAll('.card')).forEach((e)=>e.classList.remove('card-dark'));
    Array.from(document.querySelectorAll('.inpbox')).forEach((e)=>e.classList.remove('inpbox-dark'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-dark');

    document.querySelector('.navbar').classList.add('navbar-light');
    Array.from(document.querySelectorAll('.line')).forEach((e)=>e.classList.add('line-light'));
    document.querySelector('.search button').classList.add('btn-dark');
    document.querySelector('.hamburger').classList.add('hamburger-light');
    Array.from(document.querySelectorAll('.burgerslice')).forEach((e)=>e.classList.add('burgerslice-light'));
    document.querySelector('.dropdown-content').classList.add('drop-cont-light');
});

// drak mode
let dark = document.querySelector('.dropdown-content a');
dark.addEventListener('click',()=>{
    document.querySelector('.navbar').classList.remove('navbar-light');
    Array.from(document.querySelectorAll('.line')).forEach((e)=>e.classList.remove('line-light'));
    document.querySelector('.search button').classList.remove('btn-dark');
    document.querySelector('.hamburger').classList.remove('hamburger-light');
    Array.from(document.querySelectorAll('.burgerslice')).forEach((e)=>e.classList.remove('burgerslice-light'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-light');

    document.querySelector('.navbar').classList.add('navbar-dark');
    document.getElementsByTagName('body')[0].classList.add('backdark');
    document.querySelector('.divider').classList.add('divider-dark');
    document.querySelector('.startup').classList.add('startup-dark');
    Array.from(document.querySelectorAll('.card')).forEach((e)=>e.classList.add('card-dark'));
    Array.from(document.querySelectorAll('.inpbox')).forEach((e)=>e.classList.add('inpbox-dark'));
    document.querySelector('.dropdown-content').classList.add('drop-cont-dark');
});
//default mode
let sysdef =  document.querySelector('.dropdown-content a').nextElementSibling.nextElementSibling;
sysdef.addEventListener('click',()=>{
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.getElementsByTagName('body')[0].classList.remove('backdark');
    document.querySelector('.divider').classList.remove('divider-dark');
    document.querySelector('.startup').classList.remove('startup-dark');
    Array.from(document.querySelectorAll('.card')).forEach((e)=>e.classList.remove('card-dark'));
    Array.from(document.querySelectorAll('.inpbox')).forEach((e)=>e.classList.remove('inpbox-dark'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-dark');
    document.querySelector('.navbar').classList.remove('navbar-light');
    Array.from(document.querySelectorAll('.line')).forEach((e)=>e.classList.remove('line-light'));
    document.querySelector('.search button').classList.remove('btn-dark');
    document.querySelector('.hamburger').classList.remove('hamburger-light');
    Array.from(document.querySelectorAll('.burgerslice')).forEach((e)=>e.classList.remove('burgerslice-light'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-light');
})



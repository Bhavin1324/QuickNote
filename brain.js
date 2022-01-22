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
    console.log(x);
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




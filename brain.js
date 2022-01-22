let ham = document.querySelector('.hamburger');
let lis = document.querySelectorAll('.list-item');
let btn = document.querySelector('.btn');
window.addEventListener('resize',()=>{
    if(window.innerWidth >= 992){
        lis.forEach((e)=>{e.style.display = 'block'});
        document.querySelector('.searchpack').style.display = 'block';
    }
    else{
        lis.forEach((e)=>{e.style.display = 'none'});
        document.querySelector('.searchpack').style.display = 'none';
    }
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
if(window.innerWidth <= 991){
    
}



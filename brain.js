// ====================== for manage styles ==============================//
let ham = document.querySelector('.hamburger');
let lis = document.querySelectorAll('.list-item');
let btn = document.querySelector('.btn');
setTheme();
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
    else {
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

// Themes 
function setDarkMode() {
    let dark = document.querySelector('.dropdown-content a');
    localStorage.setItem("Theme", dark.innerHTML);
    document.querySelector('.navbar').classList.remove('navbar-light');
    Array.from(document.querySelectorAll('.line')).forEach((e) => e.classList.remove('line-light'));
    document.querySelector('.search button').classList.remove('btn-dark');
    document.querySelector('.hamburger').classList.remove('hamburger-light');
    Array.from(document.querySelectorAll('.burgerslice')).forEach((e) => e.classList.remove('burgerslice-light'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-light');

    document.querySelector('.navbar').classList.add('navbar-dark');
    document.getElementsByTagName('body')[0].classList.add('backdark');
    document.querySelector('.divider').classList.add('divider-dark');
    document.querySelector('.startup').classList.add('startup-dark');
    Array.from(document.querySelectorAll('.card')).forEach((e) => e.classList.add('card-dark'));
    Array.from(document.querySelectorAll('.inpbox')).forEach((e) => e.classList.add('inpbox-dark'));
    document.querySelector('.dropdown-content').classList.add('drop-cont-dark');
}
function setLightMode() {
    let light = document.querySelector('.dropdown-content a').nextElementSibling;
    localStorage.setItem("Theme", light.innerHTML);
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.getElementsByTagName('body')[0].classList.remove('backdark');
    document.querySelector('.divider').classList.remove('divider-dark');
    document.querySelector('.startup').classList.remove('startup-dark');
    Array.from(document.querySelectorAll('.card')).forEach((e) => e.classList.remove('card-dark'));
    Array.from(document.querySelectorAll('.inpbox')).forEach((e) => e.classList.remove('inpbox-dark'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-dark');

    document.querySelector('.navbar').classList.add('navbar-light');
    Array.from(document.querySelectorAll('.line')).forEach((e) => e.classList.add('line-light'));
    document.querySelector('.search button').classList.add('btn-dark');
    document.querySelector('.hamburger').classList.add('hamburger-light');
    Array.from(document.querySelectorAll('.burgerslice')).forEach((e) => e.classList.add('burgerslice-light'));
    document.querySelector('.dropdown-content').classList.add('drop-cont-light');
}
function setDefaultTheme() {
    let sysdef = document.querySelector('.dropdown-content a').nextElementSibling.nextElementSibling;
    localStorage.setItem("Theme", sysdef.innerHTML);
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.getElementsByTagName('body')[0].classList.remove('backdark');
    document.querySelector('.divider').classList.remove('divider-dark');
    document.querySelector('.startup').classList.remove('startup-dark');
    Array.from(document.querySelectorAll('.card')).forEach((e) => e.classList.remove('card-dark'));
    Array.from(document.querySelectorAll('.inpbox')).forEach((e) => e.classList.remove('inpbox-dark'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-dark');
    document.querySelector('.navbar').classList.remove('navbar-light');
    Array.from(document.querySelectorAll('.line')).forEach((e) => e.classList.remove('line-light'));
    document.querySelector('.search button').classList.remove('btn-dark');
    document.querySelector('.hamburger').classList.remove('hamburger-light');
    Array.from(document.querySelectorAll('.burgerslice')).forEach((e) => e.classList.remove('burgerslice-light'));
    document.querySelector('.dropdown-content').classList.remove('drop-cont-light');
}

function setTheme() {
    let light = document.querySelector('.dropdown-content a').nextElementSibling;
    let dark = document.querySelector('.dropdown-content a');
    if (localStorage.getItem('Theme') == light.innerHTML) {
        setLightMode();
    }
    else if (localStorage.getItem('Theme') == dark.innerHTML) {
        setDarkMode();
    }
    else {
        setDefaultTheme();
    }
}
// light mode
let light = document.querySelector('.dropdown-content a').nextElementSibling;
light.addEventListener('click', setLightMode);

// drak mode
let dark = document.querySelector('.dropdown-content a');
dark.addEventListener('click', setDarkMode);

//default mode
let sysdef = document.querySelector('.dropdown-content a').nextElementSibling.nextElementSibling;
sysdef.addEventListener('click', setDefaultTheme);

// ==== Add note ====//
let addNote = document.getElementById('noteadd');
let noteCardsContainer = document.querySelector('.cards');
let ttl = document.getElementById('ntitle');
let note = document.querySelector('.areablock');
let serachText = document.querySelector('.findnote');
let noteObj, titleObj;
showNotes();
addNote.addEventListener('click', () => {
    if (!note.value.trim() && !ttl.value.trim()) {
        alert("Cannot add empty note!");
    }
    else {
        note.style.border = '1px solid var(strong-warning)';
        let titles = localStorage.getItem("titles");
        let notes = localStorage.getItem("notes");
        if (titles == null && notes == null) {
            noteObj = [];
            titleObj = [];
        }
        else {
            noteObj = JSON.parse(notes);
            titleObj = JSON.parse(titles);
        }
        titleObj.push(ttl.value);
        noteObj.push(note.value);
        localStorage.setItem('titles', JSON.stringify(titleObj));
        localStorage.setItem('notes', JSON.stringify(noteObj));
        note.value = ttl.value = "";
        showNotes();
    }
});
//Function for displaying notes
function showNotes() {
    let titles = localStorage.getItem("titles");
    let notes = localStorage.getItem("notes");
    if (titles == null && notes == null) {
        noteObj = [];
        titleObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
        titleObj = JSON.parse(titles);
    }
    let html = "";
    Array.from(noteObj).forEach((element, index) => {
        console.log("sdsdssdf");
        html += ` <div class="col-lg-4 col-md-6 col-sm-12 signature">
        <div class="card">
            <div class="heading heading-light">${titleObj[index]}</div>
            <p class="act-note">${element}</p>
            <div class="setendwm"><button class="btn btn-dark">Edit</button><button id=${index} onclick=delNote(this.id) class="btn btn-dark">Remove</button></div>
        </div>
    </div>`;
    });
    if (noteObj.length != 0) {
        noteCardsContainer.innerHTML = html;
    }
    else {
        noteCardsContainer.innerHTML = `<div class="heading-set">Look like you haven't added any note yet</div>`;
    }
}

// function for deleting notes
function delNote(index) {
    debugger;
    let titles = localStorage.getItem("titles");
    let notes = localStorage.getItem("notes");
    if (titles == null && notes == null) {
        noteObj = [];
        titleObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
        titleObj = JSON.parse(titles);
    }
    noteObj.splice(index,1);
    titleObj.splice(index,1);
    localStorage.setItem('titles', JSON.stringify(titleObj));
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNotes();
}

// function for searching text
serachText.addEventListener('input',()=>{
    let cardList = document.getElementsByClassName('signature');
    let stext = serachText.value.toLowerCase();
    Array.from(cardList).forEach((element)=>{
        let cardHeadng = element.querySelector('.heading').innerText;
        let cardText = element.querySelector('.act-note').innerText;
        if(cardText.includes(stext) || cardHeadng.includes(stext)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });
});
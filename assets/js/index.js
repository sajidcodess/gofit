

const pl = document.querySelector('.start-btn');
const vid = document.getElementById('showcaseVideo');


pl.addEventListener("click", function () {
    vid.classList.add('active')
    vid.play();
    vid.addEventListener("ended", function () {
        vid.load();
        vid.classList.remove('active')
    })
});



// fit btns

const wbtn = document.querySelector('.woman-btn')
const mbtn = document.querySelector('.male-btn')

wbtn.addEventListener('click', function () {
    wbtn.classList.add('active');
    mbtn.classList.remove('active')
});
mbtn.addEventListener('click', function () {
    mbtn.classList.add('active');
    wbtn.classList.remove('active')
})


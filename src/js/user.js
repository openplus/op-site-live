// 
// user.js
// Use this to write your custom JS
//

var list = document.querySelectorAll('.navbar-nav .nav-link');
for (let i = 0; i < list.length; i++) {
    if (list[i].pathname === localStorage.getItem('active-menu-item')){
        list[i].classList.toggle('active');
    }
    if (list[i].parentElement.classList.contains('dropdown')){
        if (list[i].parentElement.childElementCount === 2){
            for (let j = 0; j < list[i].parentElement.children[1].childElementCount; j++) {
                list[i].parentElement.children[1].children[j].addEventListener('click', function(ev2) {
                    localStorage.setItem('active-menu-item', list[i].pathname);
                }, false);
            }

        }
    }
    list[i].addEventListener('click', function(ev) {
        localStorage.setItem('active-menu-item', ev.target.pathname);
    }, false);
}
var list_home = document.querySelector('.navbar-brand');
list_home.addEventListener('click', function(ev) {
    localStorage.setItem('active-menu-item', "/");
}, false);

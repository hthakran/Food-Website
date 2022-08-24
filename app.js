let hamMenu = document.querySelector('.hamburger');

let sidBar = document.querySelector('.side-bar');

let closeBtn = document.querySelector('.cross-btn');

hamMenu.addEventListener('click',function(){
    sidBar.classList.add('show-side-bar');
});

closeBtn.addEventListener('click',function(){
    sidBar.classList.remove('show-side-bar');
});
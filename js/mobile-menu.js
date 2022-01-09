let menu = document.querySelector("#humbergerMenu");
let mobileMenuZone = document.querySelector('.mobile-menu-zone');

menu.addEventListener('click' ,()=>{

    menu.classList.toggle('humberger-menu-clicked');
    if(mobileMenuZone.classList.contains('mobile-menu-opended')){
        mobileMenuZone.classList.remove('mobile-menu-opended');
    }
    else
    mobileMenuZone.classList.add('mobile-menu-opended');

    

})
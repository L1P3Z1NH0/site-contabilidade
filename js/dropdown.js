document.getElementById('wrapper').onclick = function() {

    let className = ' ' + wrapper.className + ' ';

    this.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         this.className + ' active';
};

document.getElementById('wrapper2').onclick = function() {

    let className = ' ' + wrapper2.className + ' ';

    this.className = ~className.indexOf(' active active2') ?
                         className.replace(' active active2 ', ' ') :
                         this.className + ' active active2';
};

window.addEventListener('scroll', function(){
    const dropDown = document.querySelector('.dropdown-menu-ul');

        if(window.pageYOffset > 0){
            dropDown.classList.add('dropdown-bg-transition');
        }else{
            dropDown.classList.remove('dropdown-bg-transition');
        }
})
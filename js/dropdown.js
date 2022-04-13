document.getElementById('wrapper').onclick = function() {

    var className = ' ' + wrapper.className + ' ';

    this.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         this.className + ' active';
};

window.addEventListener('scroll', function(){
    const dropDown = document.querySelector('.dropdown-menu-ul');

        if(window.pageYOffset > 0){
            dropDown.classList.add('dropdown-bg-transition');
        }else{
            dropDown.classList.remove('dropdown-bg-transition');
        }
})
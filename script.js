document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const entranceAnimation = document.querySelector('.entrance-animation');
        entranceAnimation.style.opacity = '0';
        setTimeout(() => {
            entranceAnimation.remove();
        }, 1200);  
    }, 1500);  

    function toggleMenu() {
        var menu = document.querySelector('.mobile-nav ul');
        menu.classList.toggle('show');

        var pancakeIcon = document.getElementById('pancake-icon');
        var closeIcon = document.getElementById('close-icon');

        pancakeIcon.style.display = menu.classList.contains('show') ? 'none' : 'block';
        closeIcon.style.display = menu.classList.contains('show') ? 'block' : 'none';
    }

    document.getElementById('pancake-icon').addEventListener('click', toggleMenu);
    document.getElementById('close-icon').addEventListener('click', toggleMenu);
});



window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.classList.add('hidden');
        
        setTimeout(() => {
            preloader.remove();
        }, 1000);
    }, 1500);
});


changeWord();
createStars();
animate();
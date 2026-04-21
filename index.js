document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            menuToggle.classList.toggle('active');
            
           
            if (sidebar.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 800) {
                sidebar.classList.remove('open');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});
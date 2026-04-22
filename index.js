document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    
    function toggleMenu() {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('active');
        overlay.classList.toggle('active');
        
        
        if (sidebar.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

  
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 800) {
                toggleMenu();
            }
        });
    });
});
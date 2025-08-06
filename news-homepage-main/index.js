document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionar elementos del DOM
    const menuButton = document.querySelector('.menu-hamburguesa');
    const mobileMenu = document.querySelector('.menu');
    
    // 2. Función para alternar el menú
    function toggleMenu() {
        // Alternar clase 'active' en el botón
        menuButton.classList.toggle('active');
        
        // Alternar clase 'active' en el menú
        mobileMenu.classList.toggle('active');
        
        // Bloquear/desbloquear scroll del body
        document.body.classList.toggle('no-scroll');
    }
    
    // 3. Event Listener para el clic
    menuButton.addEventListener('click', toggleMenu);
    
    // 4. Cerrar menú al hacer clic en un enlace (opcional)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});
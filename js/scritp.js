
    function toggleMobileMenu() {
      const menu = document.getElementById('navigationMenu');
      menu.classList.toggle('is-active');
    }

    // ========== FUNCIÓN: ABRIR IMAGEN EN MODAL ==========
  
    

    // ========== FUNCIÓN: CERRAR MODAL ==========
    function closeImageModal() {
      const modal = document.getElementById('imageModal');
      modal.classList.remove('is-active');
    }

    // ========== ANIMACIÓN AL HACER SCROLL ==========
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { 
      threshold: 0.1 
    });

    // Observar todas las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      scrollObserver.observe(card);
    });

    // ========== CERRAR MENÚ AL HACER CLICK EN ENLACE ==========
    const navigationLinks = document.querySelectorAll('.navigation-menu a');
    navigationLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navigationMenu').classList.remove('is-active');
      });
    });
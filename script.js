document.querySelectorAll('#eventBanner .carousel-item').forEach(item => {
    item.addEventListener('click', function(e) {
      if(!e.target.closest('.btn')) { // Don't trigger if clicking buttons
        const overlay = this.querySelector('.event-overlay');
        overlay.style.transform = overlay.style.transform === 'translateY(0px)' ? 
          'translateY(100%)' : 'translateY(0px)';
      }
    });
  });
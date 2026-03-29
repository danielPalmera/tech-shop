const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('#sidebar a');


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

/*
* funcion de cerrar 
*/ 
const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};



closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});


const openMenuCategory = document.getElementById('openMenuCategory');
const closeMenuCategory = document.getElementById('closeMenuCategory');
const sidebarMenuCategory = document.getElementById('sidebarMenuCategory');
const menuLinksCategory = document.querySelectorAll('#sidebarMenuCategory a');

const overlayCategory = document.getElementById('overlayCategory');

menuLinksCategory.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebarCategory();
    });
});

const closeSidebarCategory = () => {
    sidebarMenuCategory.classList.remove('active');
    overlayCategory.classList.remove('active');
};


closeMenuCategory.addEventListener('click', closeSidebarCategory);
overlayCategory.addEventListener('click', closeSidebarCategory);

openMenuCategory.addEventListener('click', () => {
    sidebarMenuCategory.classList.add('active');
    overlayCategory.classList.add('active');
});

/* ========================
   Hero Slider
   ======================== */
(function () {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.querySelector('.hero-slider__prev');
    const nextBtn = document.querySelector('.hero-slider__next');

    if (!slides.length) return;

    let current = 0;
    let autoplayTimer;

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAutoplay() {
        autoplayTimer = setInterval(next, 5000);
    }

    function resetAutoplay() {
        clearInterval(autoplayTimer);
        startAutoplay();
    }

    prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
    });

    startAutoplay();
})();
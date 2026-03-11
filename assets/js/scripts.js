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
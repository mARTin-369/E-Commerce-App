const filter = document.querySelector('.filter');
const filter_menu = document.querySelector('.filter-menu');

filter.addEventListener('click', () => {
    filter_menu.style.transform = "translateX(0px)";
    console.log(filter_menu.style.transform)
})
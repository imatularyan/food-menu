import {menu} from './constants.js';
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

// display menu items
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
    <div class="img-container">
    <img src=${item.img} class="photo" alt=${item.title} />
    </div>
    <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
      ${item.desc}
      </p>
      </div>
      </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

// display menu buttons
const displayMenuButtons = () => {
  const categories = menu.reduce((values, item) => {

    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ['all']
  );
  const categoriesBtns = categories.map( (category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join('');
  container.innerHTML = categoriesBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');

  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === 'all') {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
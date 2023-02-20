import {menu} from './constants.js';
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// display menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
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
function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {

    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ['all']
  );
  const categoriesBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join('');
  container.innerHTML = categoriesBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');

  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
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
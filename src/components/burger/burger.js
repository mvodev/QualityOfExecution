class Burger {
  constructor(burgerRoot){
    this.burgerRoot = burgerRoot;
    this.navbar = document.querySelector('.js-header-navbar');
    this.header = document.querySelector('.js-header');
    this._attachEvents();
  }

  _handleBurgerClick = () => {
    this.burgerRoot.classList.toggle('burger_is-opened');
    this.navbar.classList.toggle('navbar_is-opened');
    this.navbar.querySelector('.list-links').classList.toggle('list-links_is-vertical');
    this.header.classList.toggle('header_is-opened');
  }

  _attachEvents = ()=>{
    this.burgerRoot.addEventListener('pointerdown',(event) => this._handleBurgerClick(event));
  }

}

document.querySelectorAll('.js-burger').forEach(elem=>new Burger(elem));
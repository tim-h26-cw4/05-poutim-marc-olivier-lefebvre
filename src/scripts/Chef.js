import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const orderButton = this.element.querySelector('.button-secondary');
    orderButton.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    let total = 0;

    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].selectedType !== '') {
        total++;
      }
    }

    this.container.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = 'Nombre total de poutine(s) : ' + total;
    this.container.appendChild(p);
  }
}

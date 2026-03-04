export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.poutine-js');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }

    const button = event.currentTarget;
    button.classList.add('is-active');
    this.selectedType = button.textContent;
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.poutine__image');

    image.classList.add('is-active');

    image.src = 'assets/images/' + this.selectedType + '.png';
  }
}

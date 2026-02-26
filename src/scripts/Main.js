import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    const components = document.querySelectorAll('[data-component="Chef"]');

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new Chef(component);
    }
  }
}

new Main();

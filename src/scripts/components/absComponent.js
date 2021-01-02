class AbsComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    throw new Error('method getTemplate are not initialized');
  }

  getElement() {
    if (!this.element) {
      this.element = this.getTemplate();
    }
    return this.element;
  }
}

export default AbsComponent;

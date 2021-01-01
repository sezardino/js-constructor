class Controller {
  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  render(model) {
    model.forEach((block) => {
      const html = block.getTemplate();
      if (html) {
        this.container.insertAdjacentHTML('beforeend', html);
      }
    });
  }
}

export default Controller;

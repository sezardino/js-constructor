import {TextBlock, TitleBlock} from './blocks';
import Sidebar from './components/sidebar';
import Site from './components/site';
import {getTemplate} from './utils';

class Controller {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.init();
    this.site = this.container.querySelector('#site');
  }

  init() {
    this.container.insertAdjacentHTML('beforeend', new Sidebar().getElement());
    this.container.insertAdjacentHTML('beforeend', new Site().getElement());
    this.sidebar = this.container.querySelector('#panel');
    this.sidebar.insertAdjacentHTML('beforeend', getTemplate.form('title'));
    this.sidebar.insertAdjacentHTML('beforeend', getTemplate.form('text'));

    this.sidebar.addEventListener('submit', this.submitHandler);
  }

  render(model) {
    this.model = model;
    this.site.innerHTML = '';
    model.forEach((block) => {
      const html = block.getTemplate();
      if (html) {
        this.site.insertAdjacentHTML('beforeend', html);
      }
    });
  }

  submitHandler = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const elements = evt.target.elements;
    const data = {
      type: form.name,
    };
    Object.keys(elements).map((key) => {
      const element = elements[key];
      if (element.tagName === 'INPUT') {
        data[element.name] = element.value;
      }
    });
    this.updateModel(data);
  };

  updateModel(data) {
    const {value, styles} = data;
    let block;
    switch (data.type) {
      case 'title':
        block = new TitleBlock(value, {styles});
        break;
      case 'text':
        block = new TextBlock(value, {styles});
        break;
      case 'image':
        block = new TextBlock(value, {styles});
        break;
    }
    this.model.push(block);
    console.log(block);
    this.render(this.model);
  }
}

export default Controller;

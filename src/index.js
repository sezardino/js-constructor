import './styles/main.css';
import getTemplate from './templates';
import model from './model';

const container = document.querySelector('#site');

model.forEach((block) => {
  const {type} = block;
  const html = getTemplate[type](block);
  if (html) {
    container.insertAdjacentHTML('beforeend', html);
  }
});

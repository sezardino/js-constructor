import '../styles/main.css';
import model from './model';

const container = document.querySelector('#site');

model.forEach((block) => {
  const html = block.getTemplate();
  if (html) {
    container.insertAdjacentHTML('beforeend', html);
  }
});

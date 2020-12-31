import './styles/main.css';
import getTemplate from './templates';

const model = [
  {type: 'title', value: 'Hello World'},
  {type: 'text', value: 'Some text'},
  {type: 'columns', value: ['1', '2', '3']},
  {
    type: 'image',
    value:
      'https://img5.goodfon.ru/wallpaper/nbig/8/9c/abstraktsiia-fon-kartinka-sinii-goluboi-smeshenie-tsvetov-kr.jpg',
  },
];
const container = document.querySelector('#site');

model.forEach((block) => {
  const {type, value} = block;
  const html = getTemplate[type](value);
  if (html) {
    container.insertAdjacentHTML('beforeend', html);
  }
});

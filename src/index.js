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

const getTemplate = {
  title: (value) => `
    <div class="row">
      <div class="col-sm">
        <h1>${value}</h1>
      </div>
    </div>`,

  text: (value) => `
  <div class="row">
    <div class="col-sm">
      <p>${value}</p>
    </div>
  </div>`,

  columns: (value) => `
    <div class="row">
      ${value
        .map(
          (content) => `
        <div class="col-sm">
          <p>${content}</p>
        </div>`
        )
        .join('')}
    </div>`,
  image: (value) => `
    <div class="row">
      <img src="${value}" />
    </div>`,
};

model.forEach((block) => {
  const {type, value} = block;
  const {title, text, columns, image} = getTemplate;
  let html;
  switch (type) {
    case 'title':
      html = title(value);
      break;
    case 'text':
      html = text(value);
      break;
    case 'columns':
      html = columns(value);
      break;
    case 'image':
      html = image(value);
      break;
  }
  container.insertAdjacentHTML('beforeend', html);
});

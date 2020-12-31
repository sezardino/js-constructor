const model = [
  {type: 'title', value: 'Hello World'},
  {type: 'text', value: 'Some text'},
  {type: 'columns', value: ['1', '2', '3']},
];
const container = document.querySelector('#site');

model.forEach((block) => {
  const {type, value} = block;
  let html;
  switch (type) {
    case 'title':
      html = `
      <div class="row">
        <div class="col-sm">
          <h1>${value}</h1>
        </div>
      </div>`;
      break;
    case 'text':
      html = `
      <div class="row">
        <div class="col-sm">
          <p>${value}</p>
        </div>
      </div>`;
      break;
    case 'columns':
      const columns = value.map(
        (val) => `
        <div class="col-sm">
          <p>${val}</p>
        </div>`
      );
      html = `
      <div class="row">
        ${columns.join('')}
      </div>`;
      break;
  }
  container.insertAdjacentHTML('beforeend', html);
});

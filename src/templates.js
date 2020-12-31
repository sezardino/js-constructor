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

export default getTemplate;

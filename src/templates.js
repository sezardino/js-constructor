const getTemplate = {
  column(content) {
    return `<div class="col-sm">${content}</div>`;
  },

  row(content) {
    return `<div class="row">${content}</div>`;
  },

  block(content) {
    return this.row(this.column(content));
  },

  title(value) {
    return this.block(`<h1>${value}</h1>`);
  },

  text(value) {
    return this.block(`<p>${value}</p>`);
  },

  columns(value) {
    const content = value
      .map(
        (content) => `
    <div class="col-sm">
      <p>${content}</p>
    </div>`
      )
      .join('');
    return this.row(content);
  },

  image(value) {
    return this.block(`<img src="${value}" />`);
  },
};

export default getTemplate;

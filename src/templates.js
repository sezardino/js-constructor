const getTemplate = {
  column(content) {
    return `<div class="col-sm">${content}</div>`;
  },

  row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`;
  },

  block(content, styles = '') {
    return this.row(this.column(content), styles);
  },

  title({value, options: {styles, tag = 'h1'}}) {
    return this.block(`<${tag}>${value}</${tag}>`, styles);
  },

  text({value}) {
    return this.block(`<p>${value}</p>`);
  },

  columns({value}) {
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

  image({value}) {
    return this.block(`<img src="${value}" />`);
  },
};

export default getTemplate;

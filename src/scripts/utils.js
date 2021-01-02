const objectToString = (object = {}) => {
  if (typeof object === 'string') {
    return object;
  }
  const toString = (key) => `${key}: ${object[key]}`;
  return Object.keys(object).map(toString).join(';');
};

const getTemplate = {
  column(content) {
    return `<div class="col-sm">${content}</div>`;
  },

  row(content, styles = {}) {
    return `<div class="row" style="${objectToString(
      styles
    )}">${content}</div>`;
  },

  block(content, styles = {}) {
    return this.row(this.column(content), styles);
  },

  title(value, {styles = {}, tag = 'h1'}) {
    return this.block(`<${tag}>${value}</${tag}>`, styles);
  },

  text(value, {styles = {}}) {
    return this.block(`<p>${value}</p>`, styles);
  },

  columns(value, {styles = {}}) {
    const content = value
      .map(
        (content) => `
    <div class="col-sm">
      <p>${content}</p>
    </div>`
      )
      .join('');
    return this.row(content, styles);
  },

  image(value, {styles, alt, imageStyles}) {
    return this.block(
      `<img src="${value}" alt="${alt}" style="${objectToString(
        imageStyles
      )}" />`,
      styles
    );
  },

  form(type) {
    return `
        <form name="${type}">
          <h5>${type}</h5>
          <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
          </div>
          <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr />
      `;
  },
};

export {objectToString, getTemplate};

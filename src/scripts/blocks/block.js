class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  getTemplate() {
    throw new Error('Initialize method getTemplate to use them');
  }
}

export default Block;

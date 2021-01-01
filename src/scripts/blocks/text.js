import Block from './block';

class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options);
  }
}

export default TextBlock;

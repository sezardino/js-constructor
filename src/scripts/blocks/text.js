import {getTemplate} from '../utils';
import Block from './block';

class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  getTemplate() {
    return getTemplate.text(this.value, this.options);
  }
}

export default TextBlock;

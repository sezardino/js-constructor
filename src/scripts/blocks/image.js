import {getTemplate} from '../utils';
import Block from './block';

class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  getTemplate() {
    return getTemplate.image(this.value, this.options);
  }
}

export default ImageBlock;

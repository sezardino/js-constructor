import {getTemplate} from '../utils';
import Block from './block';

class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  getTemplate() {
    return getTemplate.title(this.value, this.options);
  }
}

export default TitleBlock;

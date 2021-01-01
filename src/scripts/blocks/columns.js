import {getTemplate} from '../utils';
import Block from './block';

class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  getTemplate() {
    return getTemplate.columns(this.value, this.options);
  }
}

export default ColumnsBlock;

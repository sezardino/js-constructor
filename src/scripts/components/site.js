import AbsComponent from './absComponent';

const getSiteTemplate = () => `<div id="site" class="content"></div>`;

class Site extends AbsComponent {
  getTemplate() {
    return getSiteTemplate();
  }
}

export default Site;

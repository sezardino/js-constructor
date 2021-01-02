import AbsComponent from './absComponent';

const getSidebarTemplate = () =>
  `<div id="panel" class="bg-light sidebar"></div>`;

class Sidebar extends AbsComponent {
  getTemplate() {
    return getSidebarTemplate();
  }
}

export default Sidebar;

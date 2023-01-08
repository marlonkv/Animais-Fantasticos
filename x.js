class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('ativo', direcao);
  }

  addTabNav() {
    this.tabMenu.forEach((itemMenu, index) => {
      this.itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.activeTab();
    }
  }
}

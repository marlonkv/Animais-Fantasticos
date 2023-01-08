export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.botaoAbrir = document.querySelector(btnOpen);
    this.botaoFechar = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal(event) {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener('click', this.eventToggleModal);
      this.botaoFechar.addEventListener('click', this.eventToggleModal);
      this.containerModal.addEventListener('click', this.cliqueForaModal);
    }
  }
}

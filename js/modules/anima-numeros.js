export default class AnimaNumeros {
  constructor(elements, observerTarget, observeClass) {
    this.numeros = document.querySelectorAll(elements);
    this.observerTarget = document.querySelector(observerTarget);
    this.observeClass = observeClass;
    this.observer;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incremento(numero) {
    const total = +numero.innerText;
    const inscremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += inscremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incremento(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserve() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    this.addMutationObserve();
  }
}

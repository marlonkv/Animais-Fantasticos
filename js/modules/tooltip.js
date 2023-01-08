export default class Tooltip {
  constructor(toolTip) {
    this.tooltips = document.querySelectorAll(toolTip);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;
    this.toolTipBox.style.left = `${event.pageX + 20}px`;

    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 200}px`;
    }
  }

  onMouseLeave(e) {
    this.toolTipBox.remove();
    e.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    e.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.toolTipBox = tooltipBox;
  }

  onMouseOver(e) {
    this.criarTooltipBox(e.currentTarget);

    e.currentTarget.addEventListener('mousemove', this.onMouseMove);
    e.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}

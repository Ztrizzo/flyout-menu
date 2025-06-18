import { LightningElement, api } from "lwc";

export default class FlyoutMenuItem extends LightningElement {
  @api label;
  @api value;
  @api selectable = false;
  @api _children = [];
  @api get children() {
    return this._children;
  }
  set children(value) {
    if (value) {
      this._children = value;
    } else {
      this._children = [];
    }
  }

  childrenToRender = this._children;

  handleMouseEnter() {
    if (!this._children) {
      return;
    }
    const width = this.template.querySelector("li").offsetWidth;
    this.childrenToRender = this._children;
    this.template.querySelector(".children").style.left = `${width}px`;
  }

  // If mouse leaves this component, stop rendering the children.
  // Recursive children count as inside of this component, so parents
  // stay rendered when children are hovered.
  handleMouseLeave() {
    if (!this._children) {
      return;
    }
    this.childrenToRender = [];
  }

  // If THIS item is selected, create event
  handleClick(event) {
    event.stopPropagation();
    if (!this.selectable) {
      return;
    }
    const selectedEvent = new CustomEvent("select", {
      detail: { value: this.value, label: this.label, selectPath: [] }
    });
    this.dispatchEvent(selectedEvent);
  }

  // if a CHILD is selected, pass on event to parents
  handleSelect(event) {
    const selectPath = event.detail.selectPath;
    selectPath.unshift(this.value);
    const selectedEvent = new CustomEvent("select", {
      detail: {
        ...event.detail,
        selectPath: selectPath
      }
    });
    this.dispatchEvent(selectedEvent);
  }
}

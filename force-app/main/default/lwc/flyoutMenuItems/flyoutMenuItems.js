import { LightningElement, api } from "lwc";

export default class FlyoutMenuItems extends LightningElement {
  @api data;

  get shouldRender() {
    return this.data && this.data.length;
  }

  handleSelect(event) {
    const selectEvent = new CustomEvent("select", { detail: event.detail });
    this.dispatchEvent(selectEvent);
  }
}

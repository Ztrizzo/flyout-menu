import { LightningElement, api } from "lwc";
import { DATA_BASIC } from "./sampleData";
import { FlowAttributeChangeEvent } from "lightning/flowSupport";

export default class FlyoutMenu extends LightningElement {
  @api _data;
  @api label;
  @api placeholder = "Select an Option…";
  @api value;
  @api selectPath;

  @api set data(value) {
    this._data = this.replaceChildrenWithUnderscore(value);
    debugger;
  }
  get data() {
    return this._data;
  }

  focused = false;

  get stringifiedData() {
    return JSON.stringify(this.data);
  }

  connectedCallback() {
    if (!this.data) {
      this.placeholder = "This is sample data...";
      this.data = DATA_BASIC;
    }
  }

  handleClick(event) {
    event.stopPropagation();
    this.focused = !this.focused;
    if (this.focused) {
      document.addEventListener("click", this.documentClickListener.bind(this));
    }
  }

  // Close the select if the user clicks anywhere else
  documentClickListener() {
    this.focused = false;
    document.removeEventListener("click", this.documentClickListener);
  }

  handleSelect(event) {
    this.selectPath = event.detail.selectPath;
    this.value = event.detail.value;
    this.placeholder = event.detail.label;
    this.focused = false;
    const valueChangedEvent = new FlowAttributeChangeEvent("value", this.value);
    const selectPathChangedEvent = new FlowAttributeChangeEvent(
      "selectPath",
      this.selectPath
    );

    this.dispatchEvent(valueChangedEvent);
    this.dispatchEvent(selectPathChangedEvent);
  }

  // Need to replace children property with _children
  // Apex cannot have properties starting with an underscore, but
  // we use a property with an underscore to match the data schema
  // used by lightning-tree-grid
  replaceChildrenWithUnderscore(node) {
    if (Array.isArray(node)) {
      return node.map((item) => this.replaceChildrenWithUnderscore(item));
    }

    const newNode = { ...node };

    if ("children" in newNode) {
      newNode._children = this.replaceChildrenWithUnderscore(newNode.children);
    }

    return newNode;
  }
}

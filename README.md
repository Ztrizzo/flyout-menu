# Flyout menu

This is a component that functions similarly to the lightning-combobox component, but it allows for a flyout-style interface

## Usage

This component can be used inside of a screen flow or inside any other LWC. It has a public attribute data that has a structure that is the same as lightning-tree-grid.
```
export const DATA_BASIC = [
  {
    label: "125313-7j",
    selectable: false,
    value: "125313-7j",
    children: [{ label: "test", value: "test", selectable: true }]
  },
  {
    label: "584996-s7",
    selectable: false,
    value: "584996-s7",
    children: [
      {
        label: "747773-jw",
        selectable: true,
        value: "747773-jw"
      },
      {
        label: "377526-zg",
        selectable: false,
        value: "377526-zg",
        children: [
          {
            label: "955330-wp",
            selectable: true,
            value: "955330-wp",
            children: [
              {
                label: "test231",
                value: "test231",
                selectable: true
              }
            ]
          },
          {
            label: "343693-9x",
            selectable: true,
            value: "343693-9x"
          }
        ]
      },
      {
        label: "638483-y2",
        selectable: true,
        value: "638483-y2"
      }
    ]
  },
  {
    label: "306979-mx",
    selectable: true,
    value: "306979-mx"
  },
  {
    label: "066195-o1",
    selectable: true,
    value: "066195-o1",
    children: []
  }
];
```
Each option is allowed to have an array of other options, called children.

If using this in flow, the data attribute is a collection of an Apex-defined data type called "FlyoutData"

## Installing
This repo contains a shell script for installing via the SF CLI
[Install Script](install-package.sh)

Link to install via UI
[Install Package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tDn000000nHGMIA2)

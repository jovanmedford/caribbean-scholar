import React from "react"
import { ComboboxUncontrolled } from "./ComboboxUncontrolled"

export const Combobox = ({ key, name, label, value, items, handleChange }) => {
  return (
    <ComboboxUncontrolled
      key={key}
      name={name}
      label={label}
      selectedItem={value}
      items={items}
      handleSelectedItemChange={handleChange}
    />
  )
}

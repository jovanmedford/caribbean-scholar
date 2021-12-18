/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { useCombobox } from "downshift"
import { inputStyle } from "./inputStyle"

export const ComboboxUncontrolled = ({
  key,
  name,
  label,
  selectedItem,
  items,
  handleSelectedItemChange,
}) => {
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    selectedItem,
    onSelectedItemChange: handleSelectedItemChange,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
         
        )
      )
    },
  })

  return (
    <div>
      <label {...getLabelProps()}>{label}:</label>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            name: name,
            key: key,
            sx: inputStyle
          })}
        />
      </div>
      {
        inputItems.length > 0 &&
        <ul {...getMenuProps({style: menuStyle})}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { ...itemStyle,
                backgroundColor: "#bde4ff" } : itemStyle
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    }
    </div>
  )
}

const itemStyle = {
  padding: "0.5rem 1rem"
}

const menuStyle = {
    margin: 0,
    padding: 0,
    boxShadow: "0px 1px 8px #9BAABB",
    color: "black",
    position: "absolute",
    zIndex: 8,
    maxWidth: "24rem",
    width: "100%",
    background: "white",
    borderRadius:" 0 0 4px 4px",
    fontSize: "1rem"
}

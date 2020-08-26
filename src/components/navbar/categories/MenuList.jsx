import React, { useState } from "react"
import classNames from "classnames"

function MenuList({ item, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null)

  const onSelectItem = index => {
    setActiveItem(index)
  }
// {activeItem === index ? " active" : ""}
  return (
    <ul className="navbar-nav ">
      {item.map((name, index) => (
        <li
          onClick={() => onSelectItem(index)}
          key={`${name}_${index}`}
          className="nav-item" 
        >
          <a className="nav-link " href="#">
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuList

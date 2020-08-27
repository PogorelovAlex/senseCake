import React, { useState } from "react"
import classNames from "classnames"
import {Link} from "gatsby"
function MenuList({ item, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null)

  const onSelectItem = index => {
    setActiveItem(index)
  }

  return (
    <ul className="navbar-nav ">
      {item.map((name, index) => (
        <li
          onClick={() => onSelectItem(index)}
          key={`${name}_${index}`}
          className = "nav-item nav-link"
        >
          <a className={activeItem === index ? "active " : ""} href="#" >
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuList

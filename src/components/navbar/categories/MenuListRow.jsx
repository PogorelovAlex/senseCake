import React, { useState } from "react"


function MenuListRow({ item, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null)

  const onSelectItem = index => {
    setActiveItem(index)
  }

  return (
    <ul className="navbar-nav-row ">
      {item.map((name, index) => (
        <li
          onClick={() => onSelectItem(index)}
          key={`${name}_${index}`}
          className = "menulist-row nav-link "
        >
          <a className={activeItem === index ? "active " : ""} href="#" >
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuListRow
import React from "react"

function MenuList({ item }) {
  return (
    <ul className="navbar-nav">
      {item.map(name => (
        <li className="nav-item">
          <a className="nav-link" href="#">
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuList

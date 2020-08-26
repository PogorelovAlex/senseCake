import React,{useState} from "react"

function MenuList({ item,onClickItem }) {
  return (
    <ul className="navbar-nav">
     {item.map((name,index) => (
        <li onClick = {()=>onClickItem(name)} key={`${name}_${index}`} className="nav-item" >
          <a className="nav-link" href='#'>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuList

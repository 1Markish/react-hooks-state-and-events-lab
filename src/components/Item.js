import React , {useState} from "react";

function Item({ name, category }) {
  
  const [inList , setInList] = useState(true)

  function handleClick(){
    setInList(!inList)
  }
  
  
  const addList = inList ? "" : "in-cart"
  const btn = inList ? "add" : "remove"
  
  return (
    <li className={addList}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btn} onClick={handleClick}>{inList ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

import React, { useEffect, useState } from "react";
import "./ShoppingCss.css";

function Shopping() {
  const [food, setFood] = useState("");

  const [shoppingList, setShoppingList] = useState([]);

  async function fetchItems() {
    const url = `https://dummyjson.com/recipes/search?q=${food}`;
    const response = await fetch(url);
    const data = await response.json();
    setShoppingList(data.recipes);

    console.log(data.recipes);
  }

  useEffect(() => {
    if (food.length >= 2) {
      var tid = setTimeout(() => {
        fetchItems();
      }, 1000);
    }

    return () => clearTimeout(tid);
  }, [food]);

  function handleFoodSearch(e) {
    let val = e.target.value;
    console.log(val);
    setFood(val);
  }

  const [selectedItems, setSelectedItems] = useState([]);

  function handleSelectedItem(val) {
    const itemObj = {
      id: Date.now(),
      itemName: val,
      isDone: false,
    };
    console.log(val);

    setSelectedItems([...selectedItems, itemObj]);
  }

  function handleTick(itemId) {
    const copyselectedItems = selectedItems.map((i) => {
      if (i.id == itemId) {
        i.isDone = true;
      }

      return i;
    });

    setSelectedItems(copyselectedItems);
  }

  function handleCross(itemId) {
    const copyselectedItems = selectedItems.filter((i) => {
      return i.id != itemId;
    });

    setSelectedItems(copyselectedItems);
  }

  return (
    <div>
      <div className="inputArea">
        <h2>Shopping List</h2>
        <input
          type="text"
          placeholder="Search an item...."
          value={food}
          onChange={(e) => handleFoodSearch(e)}
        ></input>
      </div>

      <div className="shoppingListDiv">
        {shoppingList.map((i, idx) => {
          return (
            <div
              className="shoppingListItem"
              key={idx}
              onClick={() => handleSelectedItem(i.name)}
            >
              {i.name}
            </div>
          );
        })}
      </div>

      <hr></hr>

      <h2 style={{ color: "purple" }}>My shopping list</h2>

      <div className="myShoppingList">
        {selectedItems.map((i, idx) => {
          return (
            <div key={idx}>
              <span onClick={() => handleTick(i.id)} className="tick">
                ☑️
              </span>

              <span className={i.isDone ? "strike" : "notStrike"}>
                {i.itemName}
              </span>

              <span onClick={() => handleCross(i.id)} className="cross">
                ✖️
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shopping;

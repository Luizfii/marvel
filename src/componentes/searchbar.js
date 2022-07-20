import React, { useState } from "react";
import Api from "../api";


const Searchbar = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  }
  const onButtonClickHandler = async(e) =>{
    if(search === "") return

    try{
      let heros = await Api([]);
      setSearch({heros});
    } catch (err) {
      return console.log(err);
    }
  }
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Heróis" onChange={onChangeHandler} type="text" />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;

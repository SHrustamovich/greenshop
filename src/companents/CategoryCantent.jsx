import React from "react";
import flowers from "../lib/API/flowers";


const CategoryCantent = ({ setData }) => {
 const newArriveArr = [...flowers]
 const handlyAll = () => {
  setData(newArriveArr)
 }
  const handlyNew = () => {
    const filterDate = newArriveArr.sort((a, b) => b.arrive_time - a.arrive_time );
    setData(filterDate)
  }
  
  const handlySale = () => {
    const filterPrice = newArriveArr.sort((a, b) => a.price - b.price );
    setData(filterPrice)
  }
 const handlySmall = (el) => {
  const filterSize = newArriveArr.filter((element) => element.size.some(e => (el.currentTarget.value).includes(e)))
  setData(filterSize)
 }

  return (
    <div className="categoryCantent">
      <div className="categoryCantent__allBtn">
        <button className="categoryCantent__btn" onClick={handlyAll}>All Plants</button>
        <button className="categoryCantent__btn" onClick={() => handlyNew()}>New Arrivals</button>
        <button className="categoryCantent__btn" onClick={() => handlySale()}>Sale</button>
      </div>
      <div className="category__select">
        <span>Short by: </span>
        <select name="select" id="" className="categoryCantent__select" onChange={handlySmall}>
          <option value="default" defaultValue hidden>Default sorting</option>
          <option value="small" id="small">Small</option>
          <option value="medium" id="medium">Medium</option>
          <option value="large" id="large">Large</option>
        </select>
      </div>
    </div>
  )
}
export default CategoryCantent;
import { useState } from "react";
import flowers from "../lib/API/flowers.js";

const CategoryBar = ({ setData }) => {
    const [inputVal, setInputVal] = useState(200);
    const [catBtn, setCatBtn] = useState('');

    const handlyCategory = (el) => {
        let catValue = el.currentTarget.id;
        setCatBtn(catValue);
    }

    const changeInput = (val) => {
        let changeInputVal = val.target.value;
        setInputVal(changeInputVal);
    }

    const handlyFilter = () => {
        const filterArr = flowers.filter((el) => (el.category == catBtn || el.price < inputVal))
        setData(filterArr)
    }

    return (
        <div className="category">
            <h1 className="category__title">Categories</h1>
            <ul className="category__list">
                {
                    flowers.map((el) => (
                        <li className="category__list-item" key={el.id} id={el.id} onClick={(el) => handlyCategory(el)}>
                            <button to="house" className='category__btn'>
                                <span>{el.category}</span>
                                <span>(1)</span>
                            </button>
                        </li>
                    ))
                }

            </ul>
            <h1 className="category__title">Price Range</h1>
            <input type="range" min={0} max={250} className="category__input" onChange={changeInput} />
            <p className="category__input-text">Price: {inputVal}$</p>
            <button className="category__allBtn" onClick={handlyFilter}>Filter</button>
            <h1 className="category__title">Size</h1>
            <ul className="category__list">
                <li className="category__list-item">
                    <button to="house" className="category__btn" >
                        <span>Small</span>
                        <span>(32)</span>
                    </button>
                </li>
                <li className="category__list-item">
                    <button to="house" className="category__btn" >
                        <span>Medium</span>
                        <span>(32)</span>
                    </button>
                </li>
                <li className="category__list-item">
                    <button to="house" className="category__btn" >
                        <span>Large</span>
                        <span>(32)</span>
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default CategoryBar;
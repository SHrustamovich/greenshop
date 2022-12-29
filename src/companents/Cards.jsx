import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Karzinka from "../lib/img/karzinka"
import Like from "../lib/img/Like"
import Search from "../lib/img/search"
function Cards({element}) {
  const [state, setState] = useState(false)
    return (
            <div className="categoryCard__card" onMouseOver={() => setState(true)} onMouseLeave={() => setState(false)}>
               <Link to='/card'> 
               <div className="categoryCard-pics">
                    <img src={element.photo} alt="" className="categoryCard-img" />
                    <div className={state ? "categoryCard__btn-active" : 'categoryCard__btns'}>
                        <button className="categoryCard__btn">
                            <Karzinka />
                        </button>
                        <button className="categoryCard__btn">
                            <Like />
                        </button>
                        <button className="categoryCard__btn">
                            <Search />
                        </button>
                    </div>
                </div>
                <p className="categoryCard-title">{element.name}</p>
                <p className="categoryCard-price">{element.price}$</p>
                </Link>
            </div>
    )
}

export default Cards
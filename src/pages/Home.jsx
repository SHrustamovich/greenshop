import { useState } from "react";
import CategoryBar from "../companents/CategoryBar";
import CategoryCantent from "../companents/CategoryCantent";
import CategoryCard from "../companents/CategoryCard";
import Footer from "../companents/Footer";
import Header from "../companents/Header";
import OurBlog from "../companents/OurBlog";
import Slider from "../companents/Slider";
import flowers from "../lib/API/flowers";

const Home = () => {
   const [data,setData] = useState(flowers);

    return (
        <div className="pages container">
            <Header />
            <div className="sl"> <Slider /></div>
            <div className="categoryPart">
                <div className="category-bar">
                    <CategoryBar setData={setData}/>
                </div>
                <div className="categoryAll">
                    <CategoryCantent setData={setData}/>
                    <CategoryCard data={data} />
                </div>
            </div>
            <OurBlog/>
            <Footer/>
        </div>
    )
}

export default Home;
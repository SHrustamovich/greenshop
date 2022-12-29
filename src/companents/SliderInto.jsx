import SliderImg from "../lib/image/Group 106.png"
const SliderInto = () => {
    
    return(
        <div className="slider">
        <div className="slider__info">
            <h6 className="slider__info-h6">Welcome to GreenShop</h6>
            <h1 className="slider__info-title">Let's Make a
               Better <span>Planet</span></h1>
         <p className="slider__info-text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
         <button className="slider__info-btn">SHOP NOW</button>
        </div>
        <div className="slider__img">
           <img src={SliderImg} alt="" className="slider__img-img" />
        </div>
        </div>
    )
}
export default SliderInto
import { Link } from "react-router-dom"
import flowers from "../lib/API/flowers"
import Arrow from "../lib/image/Arrow - Right.svg"
const OurBlog = () => {
    const OurBlogArr = [...flowers]
    const BlogFilterPrice = OurBlogArr.sort((a, b) => a.price - b.price);
    const BlogArr = BlogFilterPrice.splice(0, 4)
    return (
        <div className="ourBlog">
            <div className="ourBlog__title">Our Blog Posts</div>
            <p className="ourBlog__text">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className="ourBlog__allCard">
                {
                    BlogArr.map((ele) => (
                        <div className="ourBlog__card" key={ele.id}>
                            <div className="ourBlog__card-img">
                                <img src={ele.photo} alt="ourBlogphoto" width={268} height={196} />
                            </div>
                            <span className="ourBlog-time">{ele.arrive_time.toDateString()}</span>
                             <h6 className="ourBlog-title">{ele.name}</h6>
                             <p className="ourBlog-text">{(ele.disc).substring(0,60)}</p>
                           <Link to="ourcard">
                           <button className="ourBlog-btn">Read More 
                             <img src={Arrow} alt="arrow" id="ourBlogImg"/>
                             </button>
                           </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default OurBlog;
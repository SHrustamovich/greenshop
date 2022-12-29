import { Link } from "react-router-dom"
import Logo from "../lib/img/logo"
import Card_one from "../lib/image/card-1.svg"
import Card_two from "../lib/image/card-2.svg"
import Card_three from "../lib/image/card-3.svg"
import Location from "../lib/img/Location"
import Messeage from "../lib/img/Messeage"
import Calling from "../lib/img/Calling"
import Facebook from "../lib/img/Facebook"
import Instagram from "../lib/img/Instagram"
import Twitter from "../lib/img/Twitter"
import Linkln from "../lib/img/LinkLn"
import Youtube from "../lib/img/Youtube"
import Pay from "../lib/image/pay.png"

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__start">
            <ul className="footer__card">
               <li className="footer__card-item">
                  <div className="footer__card-img">
                     <img src={Card_one} alt="card_one pics" width={61} height={93} />
                  </div>
                  <div className="footer__card-title">Garden Care</div>
                  <p className="footer__card-text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
               </li>
               <li className="footer__card-item">
                  <div className="footer__card-img">
                     <img src={Card_two} alt="card_one pics" width={61} height={93} />
                  </div>
                  <div className="footer__card-title">Garden Care</div>
                  <p className="footer__card-text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
               </li>
               <li className="footer__card-item">
                  <div className="footer__card-img">
                     <img src={Card_three} alt="card_one pics" width={61} height={93} />
                  </div>
                  <div className="footer__card-title">Garden Care</div>
                  <p className="footer__card-text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
               </li>
               <li className="footer__info">
                  <h4 className="footer__info-title">Would you like to join newsletters?</h4>
                  <div className="footer__info-box">
                     <input type="text" className="footer__info-input" placeholder="enter your email address..." />
                     <button className="footer__info-btn">Join</button>
                  </div>
                  <p className="footer__info-text">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
               </li>
            </ul>
         </div>
         <div className="footer__middle">
            <ul className="footer__middle-list">
               <li className="footer__middle-item">
                  <Logo />
               </li>
               <li className="footer__middle-item">
                  <Link className="footer__middle-link">
                     <Location />
                     <p className="footer__middle-text">
                        70 West Buckingham Ave. <br />
                        Farmingdale, NY 11735
                     </p>
                  </Link>
               </li>
               <li className="footer__middle-item">
                  <Link className="footer__middle-link">
                     <Messeage />
                     <p className="footer__middle-text">
                        contact@greenshop.com
                     </p>
                  </Link>
               </li>
               <li className="footer__middle-item">
                  <Link to="#" className="footer__middle-link">
                     <Calling />
                     <p className="footer__middle-text">
                        +88 01911 717 490
                     </p>
                  </Link>
               </li>
            </ul>
         </div>
         <div className="footer__end">
            <ul className="footer__end_list">
               <li className="footer__end_item">
                  <ul className="footer__end-list">
                     <li className="footer__end-item">
                        <strong className="footer__end-title">
                           My Account
                        </strong>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Our stores
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Cantact us
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Career
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Specials
                        </a>
                     </li>
                  </ul>
               </li>
               <li className="footer__end_item">
                  <ul className="footer__end-list">
                     <li className="footer__end-item">
                        <strong className="footer__end-title">
                           Help & Guide
                        </strong>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Our stores
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Cantact us
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Career
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Specials
                        </a>
                     </li>
                  </ul>
               </li>
               <li className="footer__end_item">
                  <ul className="footer__end-list">
                     <li className="footer__end-item">
                        <strong className="footer__end-title">
                           Categories
                        </strong>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Our stores
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Cantact us
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Career
                        </a>
                     </li>
                     <li className="footer__end-item">
                        <a href="#" className="footer__end-link">
                           Specials
                        </a>
                     </li>
                  </ul>
               </li>
               <li className="footer__end_item">
                  <ul className="footer__end-list">
                     <li className="footer__end-item">
                        <strong className="footer__end-title">
                           Social Media
                        </strong>
                     </li>
                     <li className="footer__end-media">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkln />
                        <Youtube />
                     </li>
                     <li className="footer__end-item">
                        <strong className="footer__end-title">
                           We accept
                        </strong>
                     </li>
                     <li className="footer__end-item">
                        <Link>
                           <img src={Pay} alt="pay" className="footer__end-img" />
                        </Link>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
         <p className="footer-text">© 2022 GreenShop. All Rights Reserved.</p>
      </div>
   )
}
export default Footer;
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer className="mm-footer">
            <div className="container">
                <div className="row">

                    {/* Column 1 */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">MR. MAKEOVER</h5>
                        <ul className="footer-list">
                            <li><Link to="/explore">Latest Styles</Link></li>
                            <li><Link to="/explore">Trends</Link></li>
                            <li><Link to="/Story">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">FOLLOW US</h5>
                        <ul className="footer-social ps-0">
                            <li>
                                <i className="fa-brands fa-instagram"></i>
                                <a href="#">Instagram</a>
                            </li>

                            <li>
                                <i className="fa-brands fa-facebook-f"></i>
                                <a href="#">Facebook</a>
                            </li>

                            <li>
                                <i className="fa-brands fa-youtube"></i>
                                <a href="#">YouTube</a>
                            </li>

                            <li>
                                <i className="fa-brands fa-tiktok"></i>
                                <a href="#">TikTok</a>
                            </li>
                        </ul>

                    </div>

                    {/* Column 3 */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">SERVICES</h5>
                        <ul className="footer-list">
                            <li>
                                <a href="#">
                                    Hair Spa <span className="price">₹999</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Hair Keratin Treatment <span className="price">₹2999</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Hair Shine Treatment (Any Length)
                                    <span className="price">₹6999</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Hair Bluetox <span className="price">₹5999</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Nanoplastia Treatment <span className="price">₹7999</span>
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Badge / Logo */}
                    <div className="col-lg-3 col-md-12 d-flex justify-content-lg-end align-items-start">
                        <div className="connect">
                            <img
                                src={Logo}
                                alt="Award Badge"
                                className="footer-badge w-100"

                            />
                            <a className="text-light nav-link d-block mt-2" href="https://maps.app.goo.gl/oG4XzxXG5LztK7H96">Mr. Makeover Salon, Palm Mall, T.P. Nagar, Korba (C.G.)</a>
                            <a className="text-light nav-link d-block mt-2" href="tel:9827706661">+91 98277 06661</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

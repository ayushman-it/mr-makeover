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
              <li><a href="#">Latest Styles</a></li>
              <li><a href="#">Trends</a></li>
              <li><a href="#">Our Story</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">FOLLOW US</h5>
            <ul className="footer-social">
              <li><i className="bi bi-instagram"></i><a href="#">Instagram</a></li>
              <li><i className="bi bi-facebook"></i><a href="#">Facebook</a></li>
              <li><i className="bi bi-youtube"></i><a href="#">YouTube</a></li>
              <li><i className="bi bi-tiktok"></i><a href="#">TikTok</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">COMPANY</h5>
            <ul className="footer-list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refer A Friend</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Badge / Logo */}
          <div className="col-lg-3 col-md-12 d-flex justify-content-lg-end align-items-start">
            <img
              src={Logo}
              alt="Award Badge"
              className="footer-badge w-100"
              
            />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Logo from "./assets/logo-2.png";
import LogoText from "./assets/logo-text.png";
import { useState, useEffect } from "react";

const icons = [
  "https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-hamburger-like-menu-black-glyph-ui-icon-icon-concept-settings-vector-png-image_47699556.jpg",
  "https://png.pngtree.com/png-clipart/20250807/original/pngtree-hair-salon-scissors-and-comb-icon-png-image_21654220.png",
  "https://cdn-icons-png.flaticon.com/512/501/501894.png"
];

function Nav() {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true); // start rotate

      setTimeout(() => {
        setCurrentIcon((prev) => (prev + 1) % icons.length);
        setIsRotating(false); // stop rotate
      }, 1000); // rotate duration

    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Router>
        <nav className="navbar shadow-sm position-sticky top-0 z-1 py-2">
          <div className="container">
            <div className="row justify-content-between align-items-center w-100">

              {/* LEFT COLUMN – MENUS */}
              <div className="col-4">
                <ul className="navbar-nav  d-none d-lg-flex flex-row gap-3 mb-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">Find Us</Link>
                  </li>
                </ul>
              </div>

              {/* CENTER COLUMN – LOGO */}
              <div className="col-4 text-center">
                <Link to="/" className="navbar-brand m-0 d-flex gap-2">
                  <img src={Logo} alt="Logo" width="90" className="head object-fit-contain" />
                  <img src={LogoText} alt="Logo" width="200" className="text object-fit-contain" />
                </Link>
              </div>

              {/* RIGHT COLUMN – COFFEE ICON */}
              <div className="col-4 text-end">
                <img
                  src={icons[currentIcon]}
                  alt="menu-icon"
                  className={`rotating-icon ${isRotating ? "rotate" : ""}`}
                  onClick={() => setShowMenu(true)}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#coffeeMenu"
                />
              </div>

            </div>
          </div>
        </nav>




        {/* Offcanvas: contains all menus + CTA items */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="coffeeMenu"
          aria-labelledby="coffeeMenuLabel"
          style={{ width: "280px" }}
        >
          {/* Offcanvas Header with Logo */}
          <div className="offcanvas-header d-flex flex-column align-items-start border-bottom">
            {/* <img
      src="/assets/logo.jpeg" // replace with your logo
      alt="Logo"
      style={{ width: "100px", marginBottom: "10px" }}
    /> */}
            <h5 className="offcanvas-title logo" id="coffeeMenuLabel">
              Cuboid<b><span className="text-dark">Soft</span></b>
              <p className="small mb-0 text-dark" style={{ fontSize: "12px" }}>
                IT Solutions - Private <span className="text-lblue">Limited</span>
              </p>
            </h5>

            <button
              type="button"
              className="btn-close text-reset position-absolute top-0 end-0 m-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* Offcanvas Body */}
          <div className="offcanvas-body d-flex flex-column justify-content-between p-3">

            {/* Main Menu Links */}
            <ul className="list-unstyled mb-4">
              <li><Link to="/" className="text-decoration-none d-block py-2">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none d-block py-2">About</Link></li>
              <li><Link to="/service" className="text-decoration-none d-block py-2">Services</Link></li>
              <li><Link to="/service" className="text-decoration-none d-block py-2">Our Teams</Link></li>
              <li><Link to="/service" className="text-decoration-none d-block py-2">Projects</Link></li>
              <li><Link to="/service" className="text-decoration-none d-block py-2">Contact Us</Link></li>
            </ul>

            <hr />

            {/* Extra CTA Items */}
            <ul className="list-unstyled mb-4">
              {/* <li><a href="#coffee-meeting" className="text-decoration-none d-block py-2">Let's Schedule a Coffee Meeting</a></li>
            <li><a href="#partner" className="text-decoration-none d-block py-2">Be a Partner</a></li>
            <li><a href="#quote" className="text-decoration-none d-block py-2">Get a Quote</a></li>
            <li><a href="#erp" className="text-decoration-none d-block py-2">ERP Solutions</a></li> */}
            </ul>

            {/* Footer Buttons */}
            <div className="d-flex flex-column gap-2 mt-auto">
              <button className="btn btn-primary bg-lblue rounded-pill btn-sm w-100">Book an Appointment</button>
              {/* <button className="btn btn-outline-primary btn-sm w-100">Let's Discuss Project</button> */}
            </div>

          </div>
        </div>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
}

export default Nav;

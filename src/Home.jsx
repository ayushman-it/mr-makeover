import { Link } from 'react-router-dom';
import HeroImage from './assets/hero-img.png';
import VidFir from "./assets/vid.mp4";
import Hair from "./assets/vid-main.mp4";
import { useState } from 'react';

const menu = {
    "Threading": [
        { name: "Eyebrow", male: "₹50", female: "₹50" },
        { name: "Upper Lips", male: "-", female: "₹30" },
        { name: "Chin", male: "-", female: "₹20" },
        { name: "Forehead", male: "-", female: "₹20" },
        { name: "Side Lock", male: "-", female: "₹50" },
        { name: "Full Face Threading", male: "₹250", female: "₹250" }
    ],

    "Premium Flavour Wax": [
        { name: "Under Arms", male: "₹150", female: "₹150" },
        { name: "Full Hand", male: "₹500", female: "₹600" },
        { name: "Full Legs", male: "₹900", female: "₹900" },
        { name: "Half Legs", male: "₹500", female: "₹450" },
        { name: "Full Back", male: "₹1200", female: "₹1200" },
        { name: "Half Back", male: "₹600", female: "₹600" },
        { name: "Tummy", male: "₹800", female: "₹800" },
        { name: "Full Body Wax", male: "₹4000", female: "₹4500" },
        { name: "Face", male: "-", female: "₹400" },
        { name: "Upper Lips", male: "-", female: "₹50" },
        { name: "Chin / Side Locks", male: "-", female: "₹150" },
        { name: "Chest", male: "₹300+", female: "-" }
    ],

    "Beard & Shave": [
        { name: "Beard Trimming / Shape", male: "₹150", female: "-" },
        { name: "Shaving Normal", male: "₹200", female: "-" },
        { name: "Shaving Premium", male: "₹300", female: "-" },
        { name: "Face Cleansing", male: "₹100", female: "-" },
        { name: "Face Scrubbing D-tan", male: "₹150", female: "-" },
        { name: "Face Wash Normal", male: "₹50+", female: "-" },
        { name: "Back Trimming", male: "₹300", female: "-" }
    ],

    "Hair Cut Male": [
        { name: "Regular Hair Cut", male: "₹250", female: "-" },
        { name: "Regular Cut & Wash", male: "₹350", female: "-" },
        { name: "Artist Hair Cut", male: "₹400", female: "-" },
        { name: "Creative Cut", male: "₹600", female: "-" },
        { name: "Baby Boy Cut", male: "₹200", female: "-" }
    ],

    "Hair Cut Female": [
        { name: "Hair Trimming Regular", male: "-", female: "₹250" },
        { name: "Artist Hair Cut", male: "-", female: "₹400" },
        { name: "Creative Cut", male: "-", female: "₹500" },
        { name: "Cut & Wash", male: "-", female: "₹600" },
        { name: "Baby Girl Cut", male: "-", female: "₹250" },
        { name: "Split Ends Cut", male: "-", female: "₹500" },
        { name: "Flicks / Fringe", male: "-", female: "₹200" }
    ],

    "Hair Care": [
        { name: "Shampoo", male: "₹150", female: "₹250" },
        { name: "Conditioner", male: "₹100", female: "₹100" },
        { name: "Shampoo & Conditioner", male: "₹200", female: "₹300" },
        { name: "Premium Hair Wash", male: "₹250", female: "₹500" },
        { name: "Treatment Wash", male: "₹400+", female: "₹400+" }
    ],

    "Highlights": [
        { name: "Per Streak (Short)", male: "-", female: "₹400" },
        { name: "Per Streak (Long)", male: "-", female: "₹550" },
        { name: "Cap Highlights (Male)", male: "₹2000", female: "-" },
        { name: "Crown Highlights Short", male: "-", female: "₹1900" },
        { name: "Crown Highlights Long", male: "-", female: "₹2200" },
        { name: "Global Highlights Short", male: "-", female: "₹4000" },
        { name: "Global Highlights Medium", male: "-", female: "₹5000+" },
        { name: "Global Highlights Long", male: "-", female: "₹6000+" }
    ],

    "Cleanup & Facial": [
        { name: "Classic Cleanup", male: "₹500", female: "₹500" },
        { name: "Whitening Cleanup", male: "₹1300", female: "₹1300" },
        { name: "Seaweed Cleanup", male: "₹1300", female: "₹1300" },
        { name: "D-tan Cleanup", male: "₹1000", female: "₹1000" },
        { name: "Shine & Glow", male: "₹1200", female: "₹1200" },
        { name: "Whitening Facial", male: "₹2000", female: "₹2000" },
        { name: "Seaweed Facial", male: "₹2000", female: "₹2000" },
        { name: "O2C2 Facial", male: "₹2500", female: "₹2500" },
        { name: "Casmara Facial", male: "₹4000", female: "₹4000" },
        { name: "Casmara Luxury Goji", male: "₹6000", female: "₹6000" },
        { name: "Casmara Nacar Pearl", male: "₹6500", female: "₹6500" },
        { name: "Casmara Gold Sensation", male: "₹7000", female: "₹7000" },
        { name: "Marine Facial", male: "₹2800", female: "₹2800" }
    ],

    "Hair Spa": [
        { name: "Boy Cut", male: "₹700", female: "-" },
        { name: "Regular Hair Spa (Short)", male: "-", female: "₹1300" },
        { name: "Regular Hair Spa (Medium)", male: "-", female: "₹1500" },
        { name: "Regular Hair Spa (Long)", male: "-", female: "₹1800" },
        { name: "Protein Rush Spa (Medium)", male: "-", female: "₹2200" },
        { name: "Protein Rush Spa (Long)", male: "-", female: "₹2500" },
        { name: "Anti Dandruff Treatment", male: "₹900", female: "₹1800" },
        { name: "Deep Treatment", male: "₹1300", female: "₹2800" }
    ],

    "Pedicure Collection": [
        { name: "Express Pedicure", male: "₹800", female: "₹800" },
        { name: "Classic / Deluxe Pedicure", male: "₹1200", female: "₹1200" },
        { name: "Moisture Retaining Pedicure", male: "₹2000", female: "₹2000" },
        { name: "D-tan Pedicure", male: "₹1800", female: "₹1800" },
        { name: "Chocolate Pedicure", male: "₹1700", female: "₹1700" },
        { name: "Crystal Pedicure", male: "₹1900", female: "₹1900" },
        { name: "Signature Pedicure", male: "₹2200", female: "₹2200" },
        { name: "Aesthetic Pedicure Treatment", male: "₹3000", female: "₹3000" },
        { name: "Nail Paint & File", male: "-", female: "₹200" },
        { name: "Nail Paint", male: "₹100", female: "₹100" }
    ]
};


function Home() {
      const [active, setActive] = useState(Object.keys(menu)[0]);
    return (
        <>
            <section className="hero-sec">
                <div className="container px-0 mx-0">
                    <div className="row justify-content-between align-items-center py-6">
                        <div className="col-md-6 px-0 ps-x py-0">
                            <img src={HeroImage} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <div className="hero-content py-3 text-center">
                                <h1 className="display-4  text-dark fw-bold">
                                    Welcome To Mr. MAKEOVER
                                </h1>
                                <p className="text-dark">
                                    MR. MAKEOVER represents the perfect blend of innovation and tradition, uniting professional grooming, world-class hair care, trend-driven styling, education, and timeless heritage into one refined experience.
                                </p>
                                <div className="hero-cta justify-content-center d-flex gap-2">
                                    <Link to="/explore" className="btn btn-outline-dark rounded-0 btn-lg fw-bold border-2">Explore </Link>
                                    <a href="https://wa.link/ijrg6k" className="btn btn-outline-dark rounded-0 btn-lg fw-bold border-2">Book Online</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="salon-section">
                <div className="container-fluid px-0">
                    <div className="row g-0 align-items-stretch">
                        <div className="col-lg-6 salon-content d-flex align-items-center">
                            <div className="content-box">
                                <h1 className="salon-title">OUR SALONS</h1>
                                <p className="salon-text">
                                    Expertly educated, our teams deliver superior hairdressing and
                                    treatments, and our beautifully designed salons offer you a space to relax.
                                </p>

                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <Link to="/explore" className="btn salon-btn">SERVICES</Link>
                                    <a href="https://maps.app.goo.gl/qdeE9KG45o9p1oLV6" className="btn salon-btn">LOCATION</a>
                                    <a href="https://wa.link/ijrg6k" className="btn salon-btn">BOOK ONLINE</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-0 h-100">

                                {/* Image 1 */}
                                <div className="col-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
                                        className="salon-img"
                                        alt="Salon"
                                    />
                                </div>

                                {/* Image 2 */}
                                <div className="col-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3"
                                        className="salon-img"
                                        alt="Salon"
                                    />
                                </div>

                                {/* Video 1 */}
                                <div className="col-6">
                                    <video className="salon-img" autoPlay muted loop playsInline>
                                        <source src={VidFir} type="video/mp4" />
                                    </video>
                                </div>

                                {/* Video 2 */}
                                <div className="col-6">
                                    <video className="salon-img" autoPlay muted loop playsInline>
                                        <source src={Hair} type="video/mp4" />
                                    </video>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <div className="lux-salon">
                <h1>Our Luxury Services</h1>
                <p>Premium care for men & women</p>

                <div className="lux-categories">
                    {Object.keys(menu).map(cat => (
                        <button
                            key={cat}
                            className={active === cat ? "lux-btn active" : "lux-btn"}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="lux-table">
                    <div className="lux-head">
                        <span>Service</span>
                        <span>King</span>
                        <span>Queen</span>
                    </div>

                    {menu[active]?.map((item, i) => (
                        <div className="lux-row" key={i}>
                            <span>{item.name}</span>
                            <span>{item.male}</span>
                            <span>{item.female}</span>
                        </div>
                    ))}
                </div>
            </div>
            <section className="event-hero">
                <div className="container-fluid">
                    <div className="row g-0 align-items-stretch">
                        <div className="col-lg-6 event-image"></div>
                        <div className="col-lg-6 event-content d-flex align-items-center">
                            <div className="content-wrap text-center">
                                <h1 className="display-5 fw-bold">
                                    MR. MAKEOVER<br />
                                    MAINSTAGE<br />
                                    2026
                                </h1>


                                <p className="event-text">
                                    Watch the Mr. Makeover Mainstage event, streamed live from our flagship venue. Experience the cutting-edge of hair styling and grooming as our expert, award-winning team unveils the latest trends, innovative techniques, and signature looks shaping the future of men’s and women’s makeover fashion for the coming year.
                                </p>

                                <a href="#" className="btn livestream-btn mt-3">
                                    VISIT THE INSTAGRAM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="style-section">
                <div className="container-fluid px-0">
                    <div className="row g-0 align-items-stretch">

                        <div className="col-lg-6 style-content d-flex align-items-center">
                            <div className="style-box">
                                <h1 className="style-title">
                                    FIND YOUR
                                    STYLE
                                </h1>

                                <p className="style-text">
                                    Discover our signature collections to inspire your next salon visit.
                                </p>

                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <Link to="/explore" className="btn style-btn">EXPLORE</Link>
                                    <a href="#" className="btn style-btn">INSTAGRAM</a>
                                    <a href="https://wa.link/ijrg6k" className="btn style-btn">BOOK ONLINE</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 position-relative style-image-wrapper">
                            <img id="styleImage" className="style-image" src="https://bfairsalon.com/wp-content/uploads/2025/02/a-young-South-Indian-male-and-female-model-for-a-beauty-salon-with-the-male-having-a-well-groomed-beard-and-a-sharp-polished-look-and-the-female-having-flowing-breezy-hair-that-enhances-her-elegance-bot.jpg" />
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Home;
import HeroImage from './assets/hero-img.png';
import Footer from './footer';


function Home() {
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
                                    <button className="btn btn-outline-dark rounded-0 btn-lg fw-bold border-2">Explore </button>
                                    <button className="btn btn-outline-dark rounded-0 btn-lg fw-bold border-2">Book Online</button>
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
                                    <a href="#" className="btn salon-btn">SERVICES</a>
                                    <a href="#" className="btn salon-btn">LOCATIONS</a>
                                    <a href="#" className="btn salon-btn">BOOK ONLINE</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-0 h-100">
                                <div className="col-6">
                                    <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" className="salon-img" />
                                </div>
                                <div className="col-6">
                                    <img src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3" className="salon-img" />
                                </div>
                                <div className="col-6">
                                    <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250" className="salon-img" />
                                </div>
                                <div className="col-6">
                                    <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1" className="salon-img" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
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
                        <a href="#" className="btn style-btn">EXPLORE</a>
                        <a href="#" className="btn style-btn">INSTAGRAM</a>
                        <a href="#" className="btn style-btn">BOOK ONLINE</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 position-relative style-image-wrapper">
                    <img id="styleImage" className="style-image" src="https://bfairsalon.com/wp-content/uploads/2025/02/a-young-South-Indian-male-and-female-model-for-a-beauty-salon-with-the-male-having-a-well-groomed-beard-and-a-sharp-polished-look-and-the-female-having-flowing-breezy-hair-that-enhances-her-elegance-bot.jpg" />
                </div>

                </div>
            </div>
            </section>

            <Footer />
        </>
    )
}

export default Home;
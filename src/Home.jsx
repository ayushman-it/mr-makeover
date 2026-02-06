import { Link } from 'react-router-dom';
import HeroImage from './assets/hero-img.png';
import VidFir from "./assets/vid.mp4";
import Hair from "./assets/vid-main.mp4";
import { useState } from 'react';

const menu = {
    "Threading": [
        { name: "Eyebrow", male: "₹50", female: "₹50", image: "https://img.freepik.com/free-photo/young-woman-relaxing-beauty-salon_23-2148895551.jpg?semt=ais_hybrid&w=740&q=80" },
        { name: "Upper Lips", male: "-", female: "₹30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdacMoEmAC4nA66f7g66faUFP7gNxQ9fAcBA&s" },
        { name: "Chin", male: "-", female: "₹20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MqTHIVV7_-tXSjDPE1eNKuoPBZp8h_1-1Q&s" },
        { name: "Forehead", male: "-", female: "₹20", image: "https://alurabeautysalon.com/wp-content/uploads/2021/07/Forehead-Threading.jpg" },
        { name: "Side Lock", male: "-", female: "₹50", image: "https://silverinesalon.in/cdn/shop/products/side-locks-wax-500x500.jpg?v=1681655189" },
        { name: "Full Face Threading", male: "₹250", female: "₹250", image: "https://www.thegoready.com/storage/439/a05db1c2c0223ca7a0682a168a5350a021f98e52.png" }
    ],

    "Premium Flavour Wax": [
        { name: "Under Arms", male: "₹150", female: "₹150", image: "https://www.shutterstock.com/image-photo/young-unrecognizable-woman-wrapped-towel-260nw-2115619586.jpg" },
        { name: "Full Hand", male: "₹500", female: "₹600", image: "https://t4.ftcdn.net/jpg/02/30/51/39/360_F_230513987_3kijqNcCty0O1fuVUww7MZozSHlJXOcQ.jpg" },
        { name: "Full Legs", male: "₹900", female: "₹900", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZXVCGRrTVNQLohTm6thiI0008piudSnm-Q&s" },
        { name: "Half Legs", male: "₹500", female: "₹450", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkMU4icE60Kzse2-TBJCYND7TR7Iqfdg7DA&s" },
        { name: "Full Back", male: "₹1200", female: "₹1200", image: "https://3.imimg.com/data3/KL/ET/GLADMIN-171790/full-body-waxing-services-500x500.jpg" },
        { name: "Half Back", male: "₹600", female: "₹600", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mhNkND6gjdtsrS3gxKCOWrONH8UeQB6aUQ&s" },
        { name: "Tummy", male: "₹800", female: "₹800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_MoKdbkl_Kyn-saIx2W9gfjXvOQnh6rjkQ&s" },
        { name: "Full Body Wax", male: "₹4000", female: "₹4500", image: "https://m.media-amazon.com/images/I/61NJe68ZKzL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Face", male: "-", female: "₹400", image: "https://www.shutterstock.com/image-photo/professional-worker-removing-hair-beautiful-260nw-2202944127.jpg" },
        { name: "Upper Lips", male: "-", female: "₹50", image: "https://t3.ftcdn.net/jpg/02/70/34/96/360_F_270349645_k12orysFDWmBS1MIJM0y8Hi6IEVi5Kif.jpg" },
        { name: "Chin / Side Locks", male: "-", female: "₹150", image: "https://asset1.toothsi.in/Adobe_Stock_254924221_Preview_8a822699c4.jpeg?q=75&w=3840" },
        { name: "Chest", male: "₹300+", female: "-", image: "https://static.wixstatic.com/media/d23d45_37d09ff24bd74e779fc7d8c27613b9df~mv2.jpg/v1/fill/w_640,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d23d45_37d09ff24bd74e779fc7d8c27613b9df~mv2.jpg" }
    ],

    "Beard & Shave": [
        { name: "Beard Trimming / Shape", male: "₹150", female: "-", image: "https://www.shutterstock.com/image-photo/process-trimming-mans-beard-gold-600nw-2266059755.jpg" },
        { name: "Shaving Normal", male: "₹200", female: "-", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1qLIYxBwumErWPhFLPMH-AepciItn_LqVA&s" },
        { name: "Shaving Premium", male: "₹300", female: "-", image: "https://t3.ftcdn.net/jpg/01/42/44/18/360_F_142441827_QYfjnExJnUaUMSq6GxngxQGeYNoMy7WE.jpg" },
        { name: "Face Cleansing", male: "₹100", female: "-", image: "https://content.jdmagicbox.com/comp/def_content/beauty-parlours-for-men-facial/1-beauty-parlours-for-men-facial-1-b9n56.jpg" },
        { name: "Face Scrubbing D-tan", male: "₹150", female: "-", image: "https://m.media-amazon.com/images/I/81Jaaqyz9BL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Face Wash Normal", male: "₹50+", female: "-", image: "https://media.istockphoto.com/id/964912440/photo/man-getting-facial-treatment-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=moy3D5Koh65rEsBe4GwykXLO10oMr8nHz5YZv1EIs0c=" },
        { name: "Back Trimming", male: "₹300", female: "-", image: "https://thumbs.dreamstime.com/b/barber-hand-gloves-cut-hair-shaves-young-man-brick-wall-background-close-up-side-portrait-guy-back-view-148423156.jpg" }
    ],

    "Hair Cut Male": [
        { name: "Regular Hair Cut", male: "₹250", female: "-", image: "https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg?s=612x612&w=0&k=20&c=mjdP6NhDA40WBorr8kyyI69waMs1EyzLkSmT6lQRvGU=" },
        { name: "Regular Cut & Wash", male: "₹350", female: "-", image: "https://www.shutterstock.com/image-photo/barber-hairdresser-cutting-hair-beard-600nw-2530126801.jpg" },
        { name: "Artist Hair Cut", male: "₹400", female: "-", image: "https://i.pinimg.com/236x/ac/2a/ee/ac2aeeba669cd305df59f0d55b3c32bc.jpg" },
        { name: "Creative Cut", male: "₹600", female: "-", image: "https://media.istockphoto.com/id/680907176/photo/little-boy-getting-haircut-by-barber-while-sitting-in-chair-at-barbershop.jpg?s=612x612&w=0&k=20&c=pjQ1u-clewaVhuVzJfguXE29upc0-dg79bY4XCpR8t4=" },
        { name: "Baby Boy Cut", male: "₹200", female: "-", image: "https://media.istockphoto.com/id/1173589738/photo/cute-blond-baby-boy-in-a-barber-shop-having-haircut-by-hairdresser-hands-of-stylist-with.jpg?s=612x612&w=0&k=20&c=4jZ9B7F0C4Z6bBa1x4u5QnHQSZzZv4Hf9rggej-y9K8=" }
    ],

    "Hair Cut Female": [
        { name: "Hair Trimming Regular", male: "-", female: "₹250", image: "https://media.istockphoto.com/id/692999494/photo/hairdresser-cutting-some-hair-tips.jpg?s=612x612&w=0&k=20&c=5bC0fdICk914P5JWYDOi6N3CirJV4IBMTxYJh32vi8o=" },
        { name: "Artist Hair Cut", male: "-", female: "₹400", image: "https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.jpg?s=612x612&w=0&k=20&c=3dO_HWS8WvSGNbGmxTsqK70vZMGqM2REnbVJG09YnmI=" },
        { name: "Creative Cut", male: "-", female: "₹500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA09a75SFShFFEBqGyiS23Cq7PF79lIP0RKA&s" },
        { name: "Cut & Wash", male: "-", female: "₹600", image: "https://t4.ftcdn.net/jpg/02/94/48/79/360_F_294487925_dA3QE5beRMRNE89uEBy9SHNSdmgl2q0W.jpg" },
        { name: "Baby Girl Cut", male: "-", female: "₹250", image: "https://www.shutterstock.com/image-photo/barber-woman-make-fashionable-pretty-260nw-2024291342.jpg" },
        { name: "Split Ends Cut", male: "-", female: "₹500", image: "https://thumbs.dreamstime.com/b/young-beautician-trimming-cutting-split-damaged-ends-client-s-long-hair-beauty-parlor-97079132.jpg" },
        { name: "Flicks / Fringe", male: "-", female: "₹200", image: "https://i.pinimg.com/736x/a9/e2/66/a9e266c6605377b4d830dcc2420a3a97.jpg" }
    ],

    "Hair Care": [
        {
            name: "Shampoo",
            male: "₹150",
            female: "₹250",
            image: "https://media.gettyimages.com/id/923394830/photo/washing-hair.jpg?s=612x612&w=gi&k=20&c=pppAgZBOAPPqdvSi9UOSzkWTX-hi83b8wkQQQ_KB1LE="
        },
        {
            name: "Conditioner",
            male: "₹100",
            female: "₹100",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8UidCdgdE5_BsJzYUaueJNZErIu-7mBXJA&s"
        },
        {
            name: "Shampoo & Conditioner",
            male: "₹200",
            female: "₹300",
            image: "https://www.lakmesalon.in/cdn/shop/articles/shampoo-and-conditioner-for-hair_776c56a7-df5f-429d-bf9b-b76f1d8fb802.jpg?v=1770184017"
        },
        {
            name: "Premium Hair Wash",
            male: "₹250",
            female: "₹500",
            image: "https://plus.unsplash.com/premium_photo-1664475130052-f58aaf58854e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
        },
        {
            name: "Treatment Wash",
            male: "₹400+",
            female: "₹400+",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_AJaa1zGKhkTFCMBQoDErrPF_iqX5CDvDw&s"
        }
    ]


    "Highlights": [
        { name: "Per Streak (Short)", male: "-", female: "₹400", image: "https://gemeriahair.in/cdn/shop/files/Featureimage_65f201a9-96d0-4053-b00c-e22dc8449817.jpg?v=1752842556&width=1500" },
        { name: "Per Streak (Long)", male: "-", female: "₹550", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnV39pyeyjfywXzuoo5Rj1fM4jMGelPimZqw&s" },
        { name: "Cap Highlights (Male)", male: "₹2000", female: "-", image: "https://i.ytimg.com/vi/1zdYS4D9poI/oar2.jpg" },
        { name: "Crown Highlights Short", male: "-", female: "₹1900", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs27kuSZZ_USekLq6x8fR8kLeChCVcZzbc5g&s" },
        { name: "Crown Highlights Long", male: "-", female: "₹2200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1f2apfBM-_jrQV7YACSTrpWuhNzMQCtZAA&s" },
        { name: "Global Highlights Short", male: "-", female: "₹4000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYGHHwk3s-xq5bxpd5zeDmyBzj4JCQBXIyQ&s" },
        { name: "Global Highlights Medium", male: "-", female: "₹5000+", image: "https://i.pinimg.com/474x/86/38/e7/8638e79014bc06f4aabe105670abac47.jpg" },
        { name: "Global Highlights Long", male: "-", female: "₹6000+", image: "https://i.pinimg.com/236x/12/87/7e/12877ee5f9380de6e8d035c84d277e7a.jpg" }
    ],

    "Cleanup & Facial": [
        { name: "Classic Cleanup", male: "₹500", female: "₹500", image: "https://anlonartsalon.com/wp-content/uploads/2026/01/Classic-Cleanup-in-Chennai-1024x819.jpg.webp" },
        { name: "Whitening Cleanup", male: "₹1300", female: "₹1300", image: "https://lotus-professional.com/cdn/shop/files/basic_cleanup1.png?v=1664262700" },
        { name: "Seaweed Cleanup", male: "₹1300", female: "₹1300", image: "https://www.shutterstock.com/image-photo/young-woman-having-cosmetic-facial-260nw-1368458723.jpg" },
        { name: "D-tan Cleanup", male: "₹1000", female: "₹1000", image: "https://anlonartsalon.com/wp-content/uploads/2026/01/Cleanup-De-Tan-Facial-1-768x550.jpg.webp" },
        { name: "Shine & Glow", male: "₹1200", female: "₹1200", image: "https://glowcare.in/wp-content/uploads/2025/06/Youth-Facial.jpg" },
        { name: "Whitening Facial", male: "₹2000", female: "₹2000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlZnqhRvQBz17iQRT6s_hiDngnef3SNf6iA&s" },
        { name: "Seaweed Facial", male: "₹2000", female: "₹2000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsn--cKm990NTIHiTmRRJ-mwzL-shqn449Q&s" },
        { name: "O2C2 Facial", male: "₹2500", female: "₹2500", image: "https://www.letsexpresso.com/wp-content/uploads/2020/12/PXL_20201208_113506974.PORTRAIT-1024x768.jpg" },
        { name: "Casmara Facial", male: "₹4000", female: "₹4000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9PCMXdYNpUlaSmF858IFUGe9LKCjMr1Q7A&s" },
        { name: "Casmara Luxury Goji", male: "₹6000", female: "₹6000", image: "https://m.media-amazon.com/images/I/61a7fngCK+L._AC_UF350,350_QL80_.jpg" },
        { name: "Casmara Nacar Pearl", male: "₹6500", female: "₹6500", image: "https://m.media-amazon.com/images/I/61wGezvziFL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Casmara Gold Sensation", male: "₹7000", female: "₹7000", image: "https://i.ytimg.com/vi/UTTPLVVZ4eQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhINyx4fhxmDN9rRLkTgzcT4CwJQ" },
        { name: "Marine Facial", male: "₹2800", female: "₹2800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrN00NKI8rztUs80hBw75vYvekjJkxxLUY_Q&s" }
    ],

    "Hair Spa": [
        { name: "Boy Cut", male: "₹700", female: "-", image: "https://i.pinimg.com/474x/5e/d7/b3/5ed7b3f9059e414396fa31b75b61112b.jpg" },
        { name: "Regular Hair Spa (Short)", male: "-", female: "₹1300", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6OqVNmEV17GdU_GfNRV1BU487qN3mXhIyQ&s" },
        { name: "Regular Hair Spa (Medium)", male: "-", female: "₹1500", image: "https://media.gettyimages.com/id/1783229950/photo/woman-using-mobile-phone-while-getting-hair-treatment-under-a-professional-hair-steamer.jpg?s=612x612&w=gi&k=20&c=1SvNh3vuc5Ihp6hOLCgVahbvteb_jzFoGx6qSuJU8b8=" },
        { name: "Regular Hair Spa (Long)", male: "-", female: "₹1800", image: "https://media.istockphoto.com/id/1328333210/photo/directly-above-asian-chinese-female-lying-down-for-hair-wash-at-hair-salon-with-eyes-closed.jpg?s=612x612&w=0&k=20&c=At6VjbUFsqBCoKtchndQ2DiMC339YRs6rFwbjak3Peg=" },
        { name: "Protein Rush Spa (Medium)", male: "-", female: "₹2200", image: "https://content.jdmagicbox.com/comp/kolkata/d9/033pxx33.xx33.231005190756.u7d9/catalogue/toni-and-guy-hairdressing-barrackpore-barrackpore-kolkata-beauty-parlours-qwpcb1ccs7-250.jpg" },
        { name: "Protein Rush Spa (Long)", male: "-", female: "₹2500", image: "https://content.jdmagicbox.com/v2/comp/mumbai/n9/022pxx22.xx22.181222163340.f7n9/catalogue/glamorous-natural-beauty-parlour-and-spa-kalyan-east-thane-beauty-parlours-5nu43ssz2t.jpg" },
        { name: "Anti Dandruff Treatment", male: "₹900", female: "₹1800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3rzvgYsy2nVefq-LU3N-mEQ1ilCQL6DVmg&s" },
        { name: "Deep Treatment", male: "₹1300", female: "₹2800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0f9FWMer37GVk-oj76AuWINWhJgmM60ggA&s" }
    ],

    "Pedicure Collection": [
        { name: "Express Pedicure", male: "₹800", female: "₹800", image: "https://allurethaispa.in/wp-content/uploads/2024/04/dsvdsj-.jpeg" },
        { name: "Classic / Deluxe Pedicure", male: "₹1200", female: "₹1200" },
        { name: "Moisture Retaining Pedicure", male: "₹2000", female: "₹2000", image: "https://static.toiimg.com/thumb/msid-69579493,width-1280,height-720,resizemode-4/69579493.jpg" },
        { name: "D-tan Pedicure", male: "₹1800", female: "₹1800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10uvZ_HcgIWkUZRM4kTzF2xF3Na23aYF8Lg&s" },
        { name: "Chocolate Pedicure", male: "₹1700", female: "₹1700", image: "https://static.punjabkesari.in/multimedia/2019_3image_09_59_340274870chocolatepedicure2.jpg" },
        { name: "Crystal Pedicure", male: "₹1900", female: "₹1900", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_wMUlrp1BR_ZdYtz9Y6tl0ndrcd2Vi_VTw&s" },
        { name: "Signature Pedicure", male: "₹2200", female: "₹2200", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/191nM8ioGSXmnLgrkma3/media/666cb0903751733c95d7ee23.jpeg" },
        { name: "Aesthetic Pedicure Treatment", male: "₹3000", female: "₹3000", image: "https://i0.wp.com/mancaveformen.com/wp-content/uploads/2024/10/Mens-Pedicure-ManCave-for-Men.jpeg?w=1200" },
        { name: "Nail Paint & File", male: "-", female: "₹200", image: "https://m.media-amazon.com/images/I/61f4LPt-qAL._AC_UF350,350_QL80_.jpg" },
        { name: "Nail Paint", male: "₹100", female: "₹100", image: "https://verymiss.in/cdn/shop/files/4_5b4e7347-1367-400c-bf5e-bbab9bb23810.png?v=1750694985&width=1445" }
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
                            <div className="d-flex align-items-center gap-2">
                                <img src={item.image} alt={item.name} className="img-all" />
                                <span>{item.name}</span>
                            </div>

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
import './Whyplan.css'
import img from '../../assets/palm.png'
import img1 from '../../assets/real time.png'
import img2 from '../../assets/oneclick.png'
import img3 from '../../assets/live.png'
import img4 from '../../assets/bird.png'
import img5 from '../../assets/pricing.png'

const Whyplan = () => {
  return (
    
        <div className="why-plan">
            <div className="section-header">
                <h2>Why plan with us?</h2>
            </div>

            <div className="feature-list">
                <div className="feature">
                    <div className="icon-container">
                        <img src={img} alt="Personalization Icon" />
                    </div>
                    <div className="feature-content">
                        <h3>Personalization in seconds</h3>
                        <p>Personalized and flexible itineraries crafted by our AI-powered planner.</p>
                    </div>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <img src={img1}alt="Best Real-Time Negotiated Bookings Icon" />
                    </div>
                    <div className="feature-content">
                        <h3>Best Real-Time Negotiated Bookings</h3>
                        <p>Dedicated travel experts negotiate the best prices within your budget.</p>
                    </div>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <img src={img2} alt="Book-it-all in one click Icon" />
                    </div>
                    <div className="feature-content">
                        <h3>Book-it-all in one click</h3>
                        <p>Book all your personalized and flexible travel needs in just one click.</p>
                    </div>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <img src={img3} alt="24/7 Live Assistance as you explore Icon" />
                    </div>
                    <div className="feature-content">
                        <h3>24/7 Live Assistance as you explore</h3>
                        <p>24/7 support that keeps you swinging all day and night, no monkey business!</p>
                    </div>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <img src={img4} alt="Offbeat Experiences, curated for you Icon" />
                    </div>
                    <div className="feature-content">
                        <h3>Offbeat Experiences, curated for you</h3>
                        <p>Discover offbeat adventures, activities & experiences.</p>
                    </div>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <img src={img5} alt="Transparent Pricing - No Commissions Icon" />
                    </div>
                    <div className="feature-content">
                        <h3>Transparent Pricing - No Commissions</h3>
                        <p>Transparent pricing with no hidden fees - pay only a small service fee!</p>
                    </div>
                </div>
            </div>

            <div className="community-message">
                <h3>Happy Community of The Tarzan Way</h3>
            </div>
        </div>
    );
}


export default Whyplan
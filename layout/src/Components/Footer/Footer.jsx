
import './Footer.css';
import moduleName from '../../assets/mAIN ICON.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div>
      <div className="join-community">
        <h2>Join The Tarzan Way Community</h2>
        <p>Get Early Bird Deals, Extra Discounts & Priority Customer Support.</p>

        <form>
          <input type="text" placeholder="First name" />
          <input type="email" placeholder="Email address" />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>

      <div className="footer">
        <div className="footer-section">
          <img src={moduleName} alt="The Tarzan Way Logo" />
          <p>The Tarzan Way is a travel-based startup with the vision to simplify travel and build immersive travel programs across India.</p>
          <div className="social-media">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterestP} />
          </div>
          <p>Contact Us-+91 9532189564</p>
          <p>Email-info@thetarzanway.com</p>
        </div>

        <div className="footer-section">
          <h4>Travel Destinations</h4>
          <ul>
            <li>Europe</li>
            <li>Asia</li>
            <li>North America</li>
            <li>South America</li>
            <li>Australia & New Zealand</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Travel Styles</h4>
          <ul>
            <li>Personalize</li>
            <li>Workcation</li>
            <li>Volunteer</li>
            <li>Road Trips</li>
            <li>Unique</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Blogs</li>
            <li>For Corporates</li>
            <li>Testimonials</li>
            <li>About Us</li>
            <li>Contact Us +91 223334455</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Terms & Policies</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>COVID-19 Safety</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div className='copyright'>
          <p>Copyright @2013-2024 The Tarzan Way Private Limited -All Rights Reserved</p>
        </div>
      </div>

    </div>


  );
}

export default Footer
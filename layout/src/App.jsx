import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Card from './Components/Card/Card.jsx';
import img1 from './assets/one.webp'
import img2 from './assets/two.webp'
import img3 from './assets/three.webp'
import img4 from './assets/four.webp'
import img5 from './assets/goa.webp'
import img6 from './assets/kerela.webp'
import img7 from './assets/arunchal.webp'
import img8 from './assets/goa.webp'
import img9 from './assets/assam.webp'
import img10 from './assets/himachal.webp'
import img11 from './assets/ladakh.webp'
import img12 from './assets/meghalya.webp'
import img13 from './assets/rajasthan.webp'
import img14 from './assets/nicobar.webp'
import img15 from './assets/uttrakhand.webp'
import img16 from './assets/sikkim.webp'
import image from './assets/greece.webp'
import img17 from  './assets/france.webp'
import img18 from  './assets/italy.webp'
import img19 from  './assets/switzerland.webp'
import img20 from  './assets/Germany.webp'
import Container from './Components/Container/Container.jsx';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import './App.css'
import Section from './Components/section/Section.jsx';
import TravelPlanner from './Components/travelplanner/Travelplanner.jsx';
import Plantrip from './Components/plantrip/Plantrip.jsx';
import Whyplan from './Components/whyplan/Whyplan.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import PopUpBox from './Components/PopUpBox/PopUpBox.jsx';
import {useState} from 'react'


const asiaimg = [
  {
    img: image,
    loca: "Greece",
    price: "from  $18,025/ per day",
  },
  {
    img: img17,
    loca: "France",
    price: "from  $15,025/ per day",
  },
  {
    img: img18,
    loca: "Italy",
    price: "from  $11,025/ per day",
  },
  {
    img: img19,
    loca: "Switerzland",
    price: "from  $11,005/ per day",
  },
  {
    img: img20,
    loca: "Germany",
    price: "from  $20,025/ per day",
  },
]




const section = [
  {
    img: img5,
    loca: "Jammu and Kashmir",
    price: "from  $15,025/ per day",
  },
  {
    img: img6,
    loca: "kerela",
    price: "from  $6,025/ per day",
  },
  {
    img: img7,
    loca: "Arunachal Pradesh",
    price: "from  $1,404/ per day",
  },
  {
    img: img8,
    loca: "Goa",
    price: "from  $1,508/ per day",
  },
  {
    img: img9,
    loca: "Assam",
    price: "from  $3,554/ per day",
  },
  {
    img: img10,
    loca: "Himachal Pradesh",
    price: "from  $4,337/ per day",
  },
  {
    img: img11,
    loca: "Ladakh",
    price: "from  $6,313/ per day",
  },
  {
    img: img12,
    loca: "Meghalaya",
    price: "from  $6,555/ per day",
  },
  {
    img: img13,
    loca: "Rajasthan",
    price: "from  $6,916/ per day",
  },
  {
    img: img14,
    loca: "Andaman and Nicobar",
    price: "from  $3,0303/ per day",
  },
  {
    img: img15,
    loca: "Utttrakhand",
    price: "from  $7,006/ per day",
  },
  {
    img: img16,
    loca: "Sikkim",
    price: "from  $4,810/ per day",
  },
]

const cardData = [
  {
    image: img1,
    title: "Handpick your Selection",
    description: "From solo travel to workcation, honeymoon to family travel, tell us about your mood, budget & timeline."
  },
  {
    image: img2,
    title: "Unleash AI's Itinerary Wizardry!",
    description: "Get a unique itinerary completely personalized for you, with all bookings in one place.."
  },
  {
    image: img3,
    title: "Easy Bookings with 24x7 Concierge",
    description: "From your stays to activities, book-it-all in one click, and enjoy 24x7 assistance while you explore.."
  },
  {
    image: img4,
    title: "No Commissions - Pay for what you get",
    description: "No hidden charges during & after bookings. Pay For What You Get.."
  }
]
const App = () => {
  const cardRef = useRef(null);
  const [popup,setPopup] = useState(false);
  console.log(popup);
  const openPop=()=>{
    setPopup(true)
  }
  const closePopup=()=>{
    setPopup(false)
  }
  return (
    <div>
      <Navbar setPopup={openPop}/>
      {popup && <PopUpBox closePopup={closePopup} />}
      <Background />
      <h2 className='heading'>How it works ?</h2>
      <div className='cardcop'>
        {
          cardData.map(item => <Card img={item.image} title={item.title} description={item.description} />)
        }
      </div>
      <button className='btn'>Plan Itinerary For Free!</button>
      <h3>Plan as per the best destinations in India.</h3>
      <div className='cont'>
        <FaArrowLeftLong className="card__icon" onClick={() => {
          cardRef.current.style.transform = "translateX(90vh)";
        }} />
        <div className="cardWrapepr">
          <div className='card__conatainer' ref={cardRef}>
            {
              section.map(item => <Container img={item.img} loca={item.loca} price={item.price} />)
            }
          </div>
        </div>
        <FaArrowRightLong className="card__icon" onClick={() => {
          cardRef.current.style.transform = "translateX(-90vh)";
        }} />

      </div>
      <Section />
      <h3 className='headings'>Top Countries to visit in India.</h3>
      <div className='asia'>
        {
          asiaimg.map(item => <Section img={item.img} loca={item.loca} price={item.price} />)
        }
      </div>
      <button className='btns'>Start your journey now to Asia!</button>
    <TravelPlanner/>
    <Plantrip/>
    <Whyplan/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}
     


export default App
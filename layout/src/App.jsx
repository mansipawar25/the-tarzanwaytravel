import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Card from './Components/Card/Card.jsx';
import img1 from './assets/one.webp'
import img2 from './assets/two.webp'
import img3 from './assets/three.webp'
import img4 from './assets/four.webp'
import image from './assets/greece.webp'
import img17 from './assets/france.webp'
import img18 from './assets/italy.webp'
import img19 from './assets/switzerland.webp'
import img20 from './assets/Germany.webp'
import Container from './Components/Container/Container.jsx';
import { useRef } from 'react';
import './App.css'
import Slider from './Components/Slider/Slider.jsx';
import Scroll from './Components/Scroll/Scroll.jsx';
import TravelPlanner from './Components/travelplanner/Travelplanner.jsx';
import Plantrip from './Components/plantrip/Plantrip.jsx';
import Whyplan from './Components/whyplan/Whyplan.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Footer from './Components/Footer/Footer.jsx';
import PopUpBox from './Components/PopUpBox/PopUpBox.jsx';
import { useState } from 'react'
import { Router,Routes } from 'react-router-dom';



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
  const [popup, setPopup] = useState(false);
  console.log(popup);
  const openPop = () => {
    setPopup(true)
  }
  const closePopup = () => {
    setPopup(false)
  }
  return (
      <div>
        <Navbar setPopup={openPop} />
        {popup && <PopUpBox closePopup={closePopup} />}
        <Background />
        <h2 className='heading'>How it works ?</h2>
        <div className='cardcop'>
          {
            cardData.map(item => <Card img={item.image} title={item.title} description={item.description} />)
          }
        </div>
        <button className='btn'>Plan Itinerary For Free!</button>
        <h3 className='plan'>Plan as per the best destinations in India.</h3>
        <Scroll />

        <h3 className='top'>Top Countries to visit in India.</h3>
        <div className='asia'>
          {
            asiaimg.map(item => < Slider img={item.img} loca={item.loca} price={item.price} />)
          }
        </div>
        <button className='btns'>Start your journey now to Asia!</button>
        <TravelPlanner />
        <Plantrip />
        <Whyplan />
        <Testimonial />
        <Footer />
      </div>
  )
}



export default App
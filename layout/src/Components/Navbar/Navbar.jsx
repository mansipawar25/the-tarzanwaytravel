import './Navbar.css';
import moduleName from '../../assets/mAIN ICON.webp'

import img from '../../assets/login.jpeg'

const NavBar = ({ setPopup }) => {
    return (
            <nav className="nav-bar">
                <div className="logo">
                    <img src= {moduleName} alt="" className='img' />
                    <p className="logo-text">Thetarzanway</p>
                </div>
                <div className='searchbar'>
                    <input type="text" placeholder="Where you want to go?" className='search' />
        
                </div>
                <div className='button'>
                    <button className='createbtn'>Create a Trip</button>
                    <img src={img} alt="" className='imgg' onClick={setPopup}/>
                </div>
            </nav>
    );
};

export default NavBar;



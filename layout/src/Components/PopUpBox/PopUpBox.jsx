import React,{useState} from 'react'
import './PopUpBox.css'
import { RxCross2 } from "react-icons/rx";

const PopUpBox = ({ closePopup }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [receiveUpdates, setReceiveUpdates] = useState(false);

    const handleMobileNumberChange = (event) => {
      setMobileNumber(event.target.value);
    };

    const handleUpdatesChange = (event) => {
      setReceiveUpdates(event.target.checked);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Mobile Number:', mobileNumber);
      console.log('Receive Updates:', receiveUpdates);
    };



  return (
    <div className="popup">
      <div>
        <RxCross2 className="icon" onClick={closePopup} />
        <div className="popup__leftBox"></div>
        <div className="popup__rightBox">
          <h2>Login onto your Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <select>
                <option value="India">+91 (India)</option>
              </select>
              <input type='tel' placeholder='Mobile Number' value={mobileNumber} onChange={handleMobileNumberChange} required />
            </div>
            <div>
              <input type='checkbox' id='receiveUpdates' checked={receiveUpdates} onChange={handleUpdatesChange} />
              <label htmlFor='receiveUpdates'>
                Receive booking updates via whatsapp
              </label>
              <button type='submit'>Request OTP</button>
            </div>
          </form>
        </div>


      </div>
    </div>

  )
}




export default PopUpBox
import './Background.css'

const Background = () => {
    return (
        <div className='hero'>
            <div className='herocontent'>
                <h1>Effortless Travel Planning! <br />
                    Let AI Be Your Expert Guide. </h1>
                <p>Bid farewell to generic holiday packages. <br />
                    Get Your AI-Personalised Itineraries</p>
                <button className='brbtn'>Plan Itinerary For Free!</button>
            </div>
            <div className='form-container'>
      <h3>Get your free travel plan more.</h3>
      <form>
        <label> What do you want to explore?</label>
        <div className='input-container'>
          <input className="depart" type="text" placeholder='Delhi,IN' />
        </div>
        <div className='input-container'>
          <input type="text" placeholder='Search Destination' />
        </div>
        <label> When you are planning to travel?</label>
        <div className='date-container'>
          <div className='date-input'>
            <label>Start Date</label>
            <input type="date" id='start-date' placeholder='dd-mm-yyyy' />
          </div>
          <div className='date-input'>
            <label> End Date</label>
            <input type="date" id='end-date' placeholder='dd-mm-yyyy' />
          </div>
        </div>
        <button type='Submit'>Continue</button>
      </form>
    </div>
        </div>
    )
}

export default Background
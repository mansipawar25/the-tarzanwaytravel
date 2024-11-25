import './Slider.css'
 const Slider = ({img,loca,price}) => {
  return (
<div className="container">
            <div className="scrollwraps">
                <div className="card-lists">
                    <div className="card-items">
                        <img src={img} alt="" />
                        <h2 className='loc'>{loca}</h2>
                        <p className='tax'>{price}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Slider
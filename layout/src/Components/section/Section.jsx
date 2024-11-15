import './Section.css'
 const Section = ({img,loca,price}) => {
  return (
<div className="container">
            <div className="scrollwraps">
                <div className="card-lists">
                    <div className="card-items">
                        <img src={img} alt="" />
                        <h2>{loca}</h2>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Section
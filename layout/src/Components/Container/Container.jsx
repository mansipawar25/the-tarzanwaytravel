
import './Container.css'

const Container = ({img,loca,price}) => {
    return (
        <>
        <div className="container">
            <div className="scrollwrap">
                <div className="card-list">
                    <div className="card-item">
                        <img src={img} alt="" />
                        <h2>{loca}</h2>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Container
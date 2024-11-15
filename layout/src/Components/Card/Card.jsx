import './Card.css'


const Card = ({img,title,description}) => {
    return (
        <div className='card-details'>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>

    
    )
}
export default Card
import './scss/Card.css';

const Card = ({ basicPrice, profPrice, masterPrice }) => {
  return (
    <>
    <div className="card  basic">
        <p className='card-title  basic'>Basic</p>
        <h1 className="price ">$<b className='basicPrice'>{basicPrice}</b></h1>
        <div className="info">
            <p>500 GB Storage</p>
            <p>2 User Allowed</p>
            <p>Send up to 3 GB</p>
        </div>
        <button className="btn">learn more</button>
    </div>

    <div className="card  professional">
        <p className='card-title  prof'>Professional</p>
        <h1 className="price ">$<b className='profPrice'>{profPrice}</b></h1>
        <div className="info">
            <p>1 TB Storage</p>
            <p>5 User Allowed</p>
            <p>Send up to 10 GB</p>
        </div>
        <button className="btn  btn2">learn more</button>
    </div>

    <div className="card  master">
        <p className='card-title  master'>Master</p>
        <h1 className="price">$<b className='masterPrice'>{masterPrice}</b></h1>
        <div className="info">
            <p>2 TB Storage</p>
            <p>10 User Allowed</p>
            <p>Send up to 20 GB</p>
        </div>
        <button className="btn">learn more</button>
    </div>
    </>
    
  )
}

export default Card


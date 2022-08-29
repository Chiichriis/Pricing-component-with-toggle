import Card from "./Card";
import './scss/Cards.css';

const Cards = ({ basicPrice, profPrice, masterPrice }) => {
  return (
    <div className='card-wrap'>
        <Card basicPrice={basicPrice} profPrice={profPrice} masterPrice ={masterPrice}/>
    </div>
  )
}

export default Cards
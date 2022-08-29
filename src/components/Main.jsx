import Toggle from "./Toggle";
import Cards from "./Cards";
import { useState } from "react";
import './scss/Main.css';

const Main = () => {

  const [basicPrice, SetBasicPrice] = useState("19.99");
  const [profPrice, SetPorfPrice] = useState("24.99");
  const [masterPrice, SetMasterPrice] = useState("39.99");

  const togger = ()=>{ 
    const check = document.querySelector('.check');
    const circle = document.querySelector('.circle');

    if (!check.checked) {
      circle.style.right = '0'
      circle.style.left = '41%'

      SetBasicPrice("19.99");
      SetPorfPrice("24.99");
      SetMasterPrice("39.99");
    } else{
      circle.style.left = '0'; 

      SetBasicPrice("199.99");
      SetPorfPrice("249.99");
      SetMasterPrice("399.99");
    }
  }
  
  return (
    <div className="main">
        <Toggle togger ={togger}/>
        <Cards basicPrice={basicPrice} profPrice={profPrice} masterPrice ={masterPrice}/>
    </div>
  )
}

export default Main
import './scss/Toggle.css';

const Toggle = ({ togger }) => {
  

  return (
    <div className='toggle'>
        <h1 className='header'>Our Pricing</h1>
        <div className="toggle-content">
            <p>Annually</p>
            <div className='toggle-btn'>
              <div className='circle'></div>
              <input type="checkbox" className='check' onClick={togger}/>
              </div>
            <p>Monthly</p>
        </div>
    </div>
  )
}

export default Toggle
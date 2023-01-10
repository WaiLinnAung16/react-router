import { useLocation, useNavigate } from 'react-router-dom'
import './global.css'

const Services = () => {
    const nav = useNavigate();
    const location = useLocation();
    // console.log(location);
    const handleClick = ()=>{
        nav(-1)
    }
  return (
    <div className='container' onClick={handleClick}>
        Services 
        <p>{location.state ?.text}</p>
    </div>
  )
}

export default Services
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import './global.css'
const Home = () => {
    const nav = useNavigate();
    const inputRef = useRef();
    const handleClick = ()=>{
        nav("/services",{state:{text:inputRef.current.value}})
    }
  return (
    <div className='container'>
        Home
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home
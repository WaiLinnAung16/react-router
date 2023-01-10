import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom'
import './global.css'

const About = () => {
    const formRef = useRef()
    const [query,setQuery] = useSearchParams();
    const handleClick = (e)=>{
        e.preventDefault()
        setQuery({name:formRef.current[0].value,age:formRef.current[1].value})
    }
    const getClick= (e)=>{
        e.preventDefault()
       console.log(query.get("name"),query.get("age")); 
    }
  return (
    <div className='container'>
        <form ref={formRef}>
            <input type="text" name='name' />
            <input type="number" name='id' />
            <button onClick={handleClick}>Click</button>
            <button onClick={getClick}>Get</button>
        </form>
    </div>
  )
}

export default About
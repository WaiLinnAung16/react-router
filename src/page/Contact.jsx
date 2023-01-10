import { useParams } from 'react-router-dom'
import './global.css'

const Contact = () => {
    const {id} = useParams()
  return (
    <div className='container'>Contact{id}</div>
  )
}

export default Contact
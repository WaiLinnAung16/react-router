import { Navigate } from "react-router-dom"
import "./global.css"

const Admin = () => {
    if(localStorage.getItem("token")){
        return (
            <div>Admin</div>
          )
    }else{
        return <Navigate to={-1}></Navigate>
    }

}

export default Admin
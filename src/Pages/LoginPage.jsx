import { useState } from "react";
import { useDispatch} from "react-redux";
import { fetchAuth } from "../store/auth/thunks";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handelOnSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchAuth(username , password));
        setUsername("");
        setPassword("");
        navigate("/")
  
    }
    

  return (
    <div>
        <form onSubmit={handelOnSubmit}>
            <div>
            <label >Username : </label>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div>
            <label >Password : </label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>

    </div>
  )
}

export default LoginPage;
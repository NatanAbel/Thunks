import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logout } from "../store/auth/slice"
import { selectLoginToken } from "../store/auth/selectors"

function ToolBar() {
    const dispatch = useDispatch()
    const token = useSelector(selectLoginToken)
  return (
    <div>
        {!token ?
     ( <div>
        <div>
        <NavLink to="/home">Home</NavLink>
        </div>
        <div>
        <NavLink to="/login">Login</NavLink>
        </div>
      </div>) :
        (<div>
          <NavLink to="/">Posts</NavLink>
        <button onClick={()=>dispatch(logout())}><NavLink to="/home">Logout</NavLink></button>
      </div>)
}
    </div>
  )
}

export default ToolBar
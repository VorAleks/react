import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/actions/actions";
import { authSelector } from "../redux/reducers/authReducer/selector";

const Login = () => {
  const user = useSelector(authSelector);
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() =>{
    if (user.currentUser) {
      navigate('/blogs')
    }
  }, [user, navigate])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
  }
  return (
    <div>
      <h4>Login</h4>
      <form style={{marginTop: 20}} onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div>
          <button type="submit">Login</button>
          <Link to='/register'>Sign up</Link>
        </div>
      </form>
      
    </div>
  )
}
export default Login
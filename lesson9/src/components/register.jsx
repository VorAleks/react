import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/actions/actions";
import { authsuccessSelector } from "../redux/reducers/authReducer/selector";


const Register = () => {
  const user = useSelector(authsuccessSelector);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/blogs')
    }
  }, [user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return
    }
    dispatch(registerInitiate(email, password, displayName))
  }

  return (
    <div>
      <form style={{marginTop: 20}} onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" placeholder="repeat password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
        <div>
          <button type="submit">SIGN UP</button>
          Alredy have a account? <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export  default Register
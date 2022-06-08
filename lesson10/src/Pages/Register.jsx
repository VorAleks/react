import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/actions/actions";
import { authSelector } from "../redux/reducers/authReducer/selector";


const Register = () => {
  const user = useSelector(authSelector);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.currentUser) {
      navigate('/blogs')
    }
  }, [user.currentUser, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return
    }
    dispatch(registerInitiate(email, password, displayName))
  }

  
  return (
    <div>
      <h4>Registration</h4>
      <form style={{marginTop: 20}} onSubmit={handleSubmit}>
        <input name={'displayName'} type="text" placeholder="name" value={displayName || ''} onChange={(e) => setDisplayName(e.target.value)}/>
        <input name={'email'} type="text" placeholder="email" value={email || ''} onChange={(e) => setEmail(e.target.value)}/>
        <input name={'password'}type="text" placeholder="password" value={password || ''} onChange={(e) => setPassword(e.target.value)}/>
        <input name={'passwordConfirm'}type="text" placeholder="repeat password" value={passwordConfirm || ''} onChange={(e) => setPasswordConfirm(e.target.value)}/>
        <div>
          <button type="submit">SIGN UP</button>
          Alredy have a account? <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export  default Register
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Blogs from './Blogs';
import Profile from './Profile';
import NotFound from './NotFound';
import Layout from './layout';
import Authors from './authors';
import Messages from './messages';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/authors' element={<Authors />} /> 
          <Route path='/messages/:id' element={<Messages />} /> 
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;



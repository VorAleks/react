import './App.css';
import {Routes, Route} from 'react-router-dom';
import BlogsContainer from './BlogsContainer';
import Profile from './Profile';
import NotFound from './NotFound';
import Layout from './layout';
import Authors from './authors';
import Messages from './messages';
import Gitdata from './gitdata';

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/blogs' element={<BlogsContainer />} />
          <Route path='/authors' element={<Authors />} /> 
          <Route path='/messages/:id' element={<Messages />} /> 
          <Route path='/profile' element={<Profile />} />
          <Route path='/gitdata' element={<Gitdata />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;



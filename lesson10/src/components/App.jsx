import './App.css';
import {Routes, Route} from 'react-router-dom';
import BlogsContainer from '../Pages/BlogsContainer';
import Profile from '../Pages/Profile';
import NotFound from '../Pages/NotFound';
import Layout from './Layout';
import Authors from '../Pages/Authors';
import Messages from '../Pages/Messages';
import Gitdata from '../Pages/Gitdata';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ProtectedRoute from './ProtectedRoute';
import AddContact from '../Pages/AddContact';
import Contacts from '../Pages/Contacts';
import View from '../Pages/View';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/blogs' element={
            <ProtectedRoute>
              <BlogsContainer />
            </ProtectedRoute>
          } />
          <Route path='/authors' element={
            <ProtectedRoute>
              <Authors />
            </ProtectedRoute>
          } /> 
          <Route path='/messages/:id' element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          } /> 
          <Route path='/contacts' element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          } />
          <Route path='/contactsuser/:id' element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          } />
          <Route path='/addcontact' element={
            <ProtectedRoute>
              <AddContact />
            </ProtectedRoute>
          } />
          <Route path='/update/:id' element={
            <ProtectedRoute>
              <AddContact />
            </ProtectedRoute>
          } />
          <Route path='/view/:id' element={
            <ProtectedRoute>
              <View />
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/gitdata' element={<Gitdata />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;



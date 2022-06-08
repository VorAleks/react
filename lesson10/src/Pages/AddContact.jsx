import React, { useState} from "react";
import {useParams} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db as firebaseDB} from "../firebase";
import "./AddContact.css";

const initialState = {
  name: '',
  email: '',
  contact: ''
}

const AddContact  = () => {

  const [state, setState] = useState(initialState);
  const {name, email, contact} = state;

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast('Please provide value into each input field')
    } else {
        if (!id) {
          firebaseDB.child('contacts').push(state, (err) => {
            if (err) {
              toast.error(err)
            } else {
              toast.success('Contact added successfully')
            }
          })
        } else {
          firebaseDB.child(`contacts/${id}`).set(state, (err) => {
            if (err) {
              toast.error(err)
            } else {
              toast.success('Contact updated successfully')
            }
          })
        }
    }
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
  }

  const addText = () => {
    if (!id) {
      return (
        <span>Add new contact</span>
      ) 
    } else {
      return (
        <span>Edit contact</span>
      )
    }
  }

  return (
    <div className="add-container" >
      <h2>{addText()}</h2>
      <form onSubmit={handleSubmit} >
        <label htmlFor={"name"}>Name</label>
        <input placeholder={"Name is ..."} name={"name"} type={"text"} value={name || ''} onChange={handleInputChange}/>
        <label htmlFor={"email"}>Email</label>
        <input placeholder={"Email is ..."} name={"email"} type={"email"} value={email || ''} onChange={handleInputChange}/>
        <label htmlFor={"contact"}>Contact</label>
        <input placeholder={"Contact is ..."} name={"contact"} type={"number"} value={contact || ''} onChange={handleInputChange}/>
        <input type="submit" value={id ? 'update' : 'save'} />
        <ToastContainer />
          </form>
    </div>
  )
};

export default AddContact;
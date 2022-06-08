import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db as firebaseDB} from "../firebase"
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./contacts.css"

const Contacts = () => {
  const [data, setData] = useState ({});
  
  useEffect(() => {
    firebaseDB.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({...snapshot.val()})
      } else {
        setData({})
      }
    })
    return () => {
      setData({})
    }
  }, [])

  const deleteContact = (id) => {
    if (
      window.confirm('Are you sure?')
    ) {
        firebaseDB.child(`contacts/${id}`).remove((err) => {
          if (err) {
            toast.error(err)
          } else {
            toast.success('Contact deleted successfully')
          }
        })
    }
  } 

  return (
    <div>
      <table className="contacts-container">
        <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) =>{
        
            return (
              <tr key={id}>
                  <th scope={"row"}>{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>
                  <td>
                    <Link to={`/update/${id}`}>
                      <Button variant="contained" size="small">Edit</Button>
                    </Link>
                    <Button variant="text" color="secondary" size="small" onClick={() => deleteContact(id)}>Delete</Button>
                    <Link to={`/view/${id}`}>
                      <Button variant="contained" color="error" size="small">View</Button>                    
                    </Link>
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  )
}

export default Contacts;
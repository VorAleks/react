import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {db as firebaseDB} from "../firebase";

const View = () => {
  const [contact, setContact] = useState({});
  const {id} = useParams();

  useEffect(() => {
    firebaseDB.child(`contacts/${id}`).get()
      .then((data) => {
        if (data.exists()) {
          setContact({...data.val()})
        } else {
          setContact({})
        }
      })
  }, [id])

  return (
    <div>
      <div>
        <p>Contact details</p>
        <div>
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <strong>Name:</strong>
          <span>{contact.name}</span>
          <br />
          <strong>Email:</strong>
          <span>{contact.email}</span>
          <br />
          <strong>Contact:</strong>
          <span>{contact.contact}</span>
          <br />
          <Link to={'/contacts'}>
            <Button>Go back</Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default View;
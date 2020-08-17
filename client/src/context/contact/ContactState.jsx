import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  UPDATE_CONTACT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Opara kelechi",
        email: "thisiskelechi@gmail.com",
        phone: "09029577152",
        type: "personal",
      },
      {
        id: 2,
        name: "Opara Nkemjika",
        email: "nkme@gmail.com",
        phone: "07045120705",
        type: "personal",
      },
      {
        id: 3,
        name: "John Doe",
        email: "jd@gmail.com",
        phone: "09068650010",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter



  return (
      <ContactContext.Provider 
      value={{
          contacts: state.contacts
      }}
      >
          {props.children}
      </ContactContext.Provider>
  )
};


export default ContactState

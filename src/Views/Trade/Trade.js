import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../../Firebase/FirebaseConfig' 
import MessageSuccess from '../../Components/MessageSuccess/MessageSuccess';

const initialState = {
    name: '',
    lastName: '',
    email: '',

};


const Trade = () => {
  const [values, setValues] = useState(initialState);

  const [purchaseID, setPurchaseID] = useState('');
  
  const onChange = (e) => {
      const {value, name} = e.target;
      setValues({...values, [name]: value})
  }

  const onSubmit = async (e) => {
      e.preventDefault()
      const docRef = await addDoc(collection(db, "purchases"), {
            values                 
      });
      console.log('Document written with ID:', docRef.id);
      setPurchaseID(docRef.id)
      setValues(initialState);
  }

  return (
    <div>Trade

        <form className='FormContainer' onSubmit={onSubmit}>
            <TextField
                placeholder='Name'
                style={{margin: 10, width: 400 }}
                value={values.name}
                name='name'
                onChange={onChange}
            />
            <TextField
                placeholder='LastName'
                style={{margin: 10, width: 400 }}
                value={values.lastName}
                name='lastName'
                onChange={onChange}
            />
            <TextField
                placeholder='Email'
                style={{margin: 10, width: 400 }}
                value={values.email}
                name='email'
                onChange={onChange}
            />
            <button className='btnASendAction'>Send</button>
            {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
        </form>    
    </div>
  )
}

export default Trade
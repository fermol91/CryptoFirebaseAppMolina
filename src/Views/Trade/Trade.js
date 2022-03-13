import React, {useContext} from 'react';
import { TradeContext } from '../../Context/TradeContext';
import EmptyTrade from '../../Components/EmptyTrade/EmptyTrade';
import { Link } from 'react-router-dom';


const Trade =(initial)=> {
const{Trade, removecoinsData, clearTrade}= useContext(TradeContext)

/* suma total */
let totalTotal= 0;
Trade.forEach(e => totalTotal += (e.Price * e.cantidad));
console.log(totalTotal)



  return <div className="altura">
      <div className='contenedor mar__bot'> 

        {Trade.length === 0 ? <EmptyTrade/> : <div>
            {Trade.map((PR, initial)=>{            
              return(
                  <div className="cartProduct" key={Trade.id}>                
                    <img src={PR.icon} className="cartProduct__img" alt={PR.Coin}/>

                    <table border="0" cellSpacing={0} className="cartProduct__table" >
                      <tr>
                        <td><h2 className='itemCard__detail--prod-open'>{PR.Coin}</h2></td>
                        <td className="itemCard__detail--extra">x 1</td>
                        <td><p className="itemCard__detail--extra">$ {PR.Price}</p></td>
                      </tr>

                      <tr>
                        <td className="itemCard__detail--extra">Total:</td> 
                        <td className="itemCard__detail--extra">x {PR.cantidad}</td>
                        <td><h4 className="itemCard__detail--price">$  {PR.Price * PR.cantidad}</h4></td>
                      </tr>                  
                    </table>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='cartProduct__close' onClick={()=> {removecoinsData(PR.id)}}><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    </div>
              )
            })}

            <h2 className='cart__total'>Valor total: $ {totalTotal}</h2>

            <button className="btn__confirm">
              <Link to="/tradeIt" className='link__confirm' totalTotal={totalTotal}>
                Confirmar Compra
              </Link>
              
              </button>
            <button onClick={()=>{clearTrade(Trade)}} className="btn__clear">Vaciar Carrito</button>
            
            
            </div>}
            

      </div>
    </div>
}

export default Trade;













/*import React, {useState} from 'react';
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
*/
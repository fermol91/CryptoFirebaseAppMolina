import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {	collection,	query,	where,	getDocs,	documentId,} from 'firebase/firestore';
import {db} from '../../Firebase/FirebaseConfig';
import CardComponents from '../../Components/CardComponents/CardComponents';
import Counter from '../../Components/Counter/Counter';
/*
import { useContext } from 'react';
import { TradeContext } from '../../Context/TradeContext';
*/

const CoinDetail = (cryptoCoin) => {
  const [coinData, setCoinData] = useState([]); 
   
  //console.log(coinData)
  //const id = useParams()

  //let coinId = id.id
  const data = useState ();

  const {id} = useParams()

  //console.log(id)

  useEffect(() => {
    const getCoin = async () => {
      const q = query(collection(db, 'Monedas'), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      //console.log('DaTA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        //console.log('Data:', doc.data(), 'ID:', doc.id);
        docs.push({...doc.data(), id: doc.id});
      });
      //console.log(docs);
      setCoinData(docs);
    };
    getCoin();
  }, [id]);

  /*const {tradeList, sendToTrade} = useContext(TradeContext)
  //revisar esta funcion
  function onAdd(cant) {
    console.log(cant)
    sendToTrade({...cryptoCoin, cantidad: cant} )
  }*/

  return (
    <div>
        {coinData.map((data) => {
            return <CardComponents coinsData={data} key={data.id} />;
            
        })}
      <Counter stock={data.cantidad} item={data}/> 
    </div>
    
      
    
  )
}

export default CoinDetail


//<button onClick={onAdd(5)}>Send to Trade</button>
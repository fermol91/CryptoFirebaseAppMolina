import React, {useState, useEffect} from 'react';

import CardComponents from  '../CardComponents/CardComponents'
import './CardList.css'

//Firebase - Firestore
import {collection, query, getDocs} from 'firebase/firestore';
import {db} from '../../Firebase/FirebaseConfig';

// RRD
import {Link} from 'react-router-dom'

const CardList = () => {
const [coinsData, setCoinsData] = useState([]);


useEffect(() => {
    const getCoins = async () => {
      const q = query(collection(db, 'Monedas'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      //console.log('DaTA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        //console.log('Data:', doc.data(), 'ID:', doc.id);
        docs.push({...doc.data(), id: doc.id});
      });
      //console.log(docs);
      setCoinsData(docs);
    };
    getCoins();
  }, []);

  return (
    <div className='CardListContainer'>
        {coinsData.map((data) => {
            return (
                <Link to={`details/${data.id}`}>
                    <CardComponents coinsData={data} key={data.id} />
                </Link>    
            )
        })}
    </div>
  )
}

export default CardList;
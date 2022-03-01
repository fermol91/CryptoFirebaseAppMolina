import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//Firebase - Firestore
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../../Firebase/FirebaseConfig';

import CardComponents from '../../Components/CardComponents/CardComponents';

const GenderType = () => {
    const [coinGenderData, setCoinGenderData] = useState([]);

    console.log(coinGenderData)

    const {gender} = useParams();
    
    useEffect(() => {
        const getCoinGenderData = async () => {
          const q = query(collection(db, 'Monedas'), where('gender', "==", gender));
          const docs = [];
          const querySnapshot = await getDocs(q);
          //console.log('DaTA:', querySnapshot);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
          });
          setCoinGenderData(docs);
        };
        getCoinGenderData();
      }, [gender]);

  return (
    <div>
        {coinGenderData.map((data) => {
            return (
                <div>
                    <CardComponents coinsData={data} key={data.id} />;
                </div>
            );    
        })}
    </div>
  )
}

export default GenderType
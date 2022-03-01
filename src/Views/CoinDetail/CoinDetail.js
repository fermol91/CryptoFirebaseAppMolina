import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import {db} from '../../Firebase/FirebaseConfig';
import CardComponents from '../../Components/CardComponents/CardComponents';


const CoinDetail = () => {
  const [coinData, setCoinData] = useState([]); 
   
  console.log(coinData)
  //const id = useParams()

  //let coinId = id.id

  const {id} = useParams()

  console.log(id)

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

  return (
    <div>
        {coinData.map((data) => {
            return <CardComponents coinsData={data} key={data.id} />;
        })}
    </div>
  )
}

export default CoinDetail
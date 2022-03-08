import  {createContext} from 'react';
import { useState } from 'react';

export const TradeContext = createContext ([])

//creacion del componente que maneja el contexto



const TradeContextProvider = ({children}) => {
//revisar esta funcion
    const [tradeList, setTradeList] = useState([])
    function sendToTrade (items) {
        setTradeList(...tradeList, items)
    }

  return (
    <TradeContext.Provider value={{
        tradeList,
        sendToTrade
    }}>
        {children}
    </TradeContext.Provider>
  )
}

export default TradeContextProvider
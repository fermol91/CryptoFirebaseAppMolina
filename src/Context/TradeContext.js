// 1- importo createContext
import React, {createContext, useState} from 'react';

// 2- Creo contexto y lo exporto
export const TradeContext = createContext()

// 3- Creo mi provider

export const TradeContextProvider = ({children}) => {    

    const [trade, setTrade] = useState([]) // array vacio para ir llenando

        // 5- detallo funciones a pasar → por medio de "value"
        const addItem =(coinsData, cantidad)=>{
                        
            const product = {...coinsData, cantidad}
            const comparecoinsData = trade.find((prod) => prod.id === coinsData.id)

            if(cantidad !== 0){
                if(comparecoinsData){
                    //comparecoinsData.cantidad += cantidad;
                    const consulta = window.confirm(' ¿Quieres seguir comprando Cryptos ;)?')
                    
                    if(consulta  === true){
                        comparecoinsData.cantidad += cantidad;
                    }
                    
                }else{
                    setTrade([...trade, product])
                }
            } 
        }

        const removecoinsData =(coinsDataID)=>{
            const actualizarTrade = trade.filter((trade) => {
                return trade.id !== coinsDataID
            })
            setTrade (actualizarTrade)
        }

        const clearTrade = (trade)=>{
            return setTrade([])
        }
        


    // 4- devuelvo/retorno valores x medio de children
    return <TradeContext.Provider value={{trade, setTrade, addItem, removecoinsData, clearTrade}}>
        {children}
    </TradeContext.Provider>

}


























/*import  {createContext} from 'react';
import { useState } from 'react';

export const TradeContext = createContext ([])

//creacion del componente que maneja el contexto



const TradeContextProvider = ({children}) => {
//revisar esta funcion
    const [tradeList, setTradeList] = useState([])
    function sendToTrade (coinsDatas) {
        setTradeList(...tradeList, coinsDatas)
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
*/
import { useEffect, useState } from 'react'
import './App.css'
import GroupPrice from './components/GruopPrice'
import Header from './components/Header'
import MainText from './components/MainText'
import {contextProducts} from './context/contextApi'

function App() {
    const [products, setProducts] = useState([])

    const GetDataApi = () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-WAYm4nugi4QigyEyL7MDvwJ2' }
        };

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        GetDataApi()
    },[])

    return (
        <>
            <contextProducts.Provider value={{setProducts , products}}>
                <Header />
                <MainText />
                <GroupPrice />
            </contextProducts.Provider>

        </>
    )
}

export default App

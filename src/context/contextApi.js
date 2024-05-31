/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const contextProducts = createContext([])


// export const CoinContextApi = (props) => {
//     const [products, setProducts] = useState([])

//     const GetDataApi = () => {
//         const options = {
//             method: 'GET',
//             headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-WAYm4nugi4QigyEyL7MDvwJ2' }
//         };

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
//             .then(response => response.json())
//             .then(response => setProducts(response))
//             .catch(err => console.error(err));
//     }


//     useEffect(() => {
//         GetDataApi()
//     }, [])

//     return (
//         <>
//             <contextProducts.Provider value={{ setProducts, products }}>
//                 {props.children}
//             </contextProducts.Provider>
//         </>
//     )
// }
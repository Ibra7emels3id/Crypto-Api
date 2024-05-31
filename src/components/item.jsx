/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <>
            <tr className='h-14 text-center'>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.market_cap_rank}</th>
                <div className="img flex text-right ml-12">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center justify-center">
                        <img
                            className='mx-1 rounded-full'
                            src={product.image}
                            alt=""
                            width={40}
                            height={40}
                        />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center justify-center"><p>{product.name}</p></td>
                </div>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">${product.current_price}</td>
                <td className={`whitespace-nowrap px-4 py-2 text-gray-700 font-medium ${Math.floor(product.price_change_percentage_24h * 100) / 100 >= 0.5 ? 'text-[#38a330]' : 'text-[red]'} `}>{Math.floor(product.price_change_percentage_24h * 100) / 100}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">${product.market_cap}</td>
                <td className="whitespace-nowrap px-4 py-2 ">
                    <Link href='/' className='bg-[#535bf2] text-[#eee] rounded-full px-5 py-2.5 text-sm font-medium'>
                        Buy
                    </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    <Link to={`/view/${product.id}`} className='bg-[#535bf2] text-white rounded-full px-5 py-2.5 text-sm font-medium'>
                        view
                    </Link>
                </td>
            </tr>
        </>
    );
}

export default Item;

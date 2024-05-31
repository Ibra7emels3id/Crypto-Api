import React, { useContext, useEffect, useState } from 'react';


// import imges icons
import icon1 from '../../imga/bitcoin.webp'
import { contextProducts } from '../context/contextApi';
import Item from './item';
import Loader from './Loaders/Loader';

const GroupPrice = () => {
    const { products } = useContext(contextProducts);
    const [getInput, setgetInput] = useState('')
    const [Datafilters, setDatafilters] = useState()
    

    const handleinput = (e) => {
        setgetInput(e.target.value)
        if (e.target.value === '') {
            setDatafilters(products)
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        const getFilter = await products?.filter((it) => {
            return it.name.toLowerCase().includes(getInput.toLowerCase());
        })
        setDatafilters(getFilter)
    }

    const AllItems = Datafilters?.slice(0, 10).map((product, index) => {
        return <Item product={product} key={index} />
    })

    useEffect(()=>{
        setDatafilters(products)
    },[products])

    return (
        <>
            <div className="flex w-[70%] m-auto flex-col items-center justify-center mt-14">
                <div className="input w-full flex items-center">
                    <label className="input w-[50%] m-auto relative" htmlFor="" >
                        <form action="" onSubmit={handleSearch}>
                            <input onChange={handleinput} className=' bg-[#eee] w-full h-16 m-auto rounded-xl px-3 text-black' type="search" name="" id="" placeholder='Search Crypto...' />
                            <input className='absolute bg-[#535bf2] h-14 top-1 w-28 rounded-xl right-1 text-xl cursor-pointer' type="submit" value="Search" />
                        </form>
                    </label>
                </div>
                <div className="Table w-full mt-12 pb-32">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-[#eee] text-sm">
                            <thead className="ltr:text-left rtl:text-right h-14">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] w-[50px] ">#</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] w-[200px]">Name</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] ">Price</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] ">24H Change</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] ">Market Cap</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] ">Buy</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-extrabold text-[#535bf2] ">View</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y  divide-gray-200 relative">
                                {products?.length > 0 ? AllItems : <div className=' bg-opacity-60 backdrop-blur-sm fixed top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center'>
                                    <Loader/>
                                </div> }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupPrice;

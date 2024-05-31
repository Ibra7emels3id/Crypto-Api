import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChartData from '../components/ChartData';
import Header from '../components/Header';
import Loader from '../components/Loaders/Loader';


const View = () => {
    const [DataId, setDataId] = useState({})
    const { DetailsId } = useParams()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const IdDataApi = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-WAYm4nugi4QigyEyL7MDvwJ2' }
        };
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/${DetailsId}?vs_currency=usd`, options)
            const response = await data.json()
            setDataId(response)
        } catch (err) {
            console.error(err);
            setError(err)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        IdDataApi()
    }, []);

    return (
        <>
            {!loading ? <div>
                <Header />
                <div className="detais pt-16 pb-5 flex flex-col items-center justify-center">
                    <img
                        className=' rounded-full'
                        src={DataId?.image?.large}
                        alt=""
                        width={150}
                        height={150}
                    />
                    <h3 className=' text-4xl mt-5'>{DataId.name}</h3>
                </div>
                <div className="ChartData w-[45%] m-auto">
                    <ChartData />
                </div>
                <div className="Details w-[45%] m-auto mt-5 flex flex-col items-center justify-center p-5">
                    <div className="rank flex justify-between w-full border-b py-2 border-spacing-1">
                        <h3 className='text-[#535bf2]'>Rank</h3>
                        <p>{DataId?.market_data?.market_cap_rank}</p>
                    </div>
                    <div className="price flex justify-between w-full border-b py-2">
                        <h3 className='text-[#535bf2]'>Price</h3>
                        <p>${DataId?.market_data?.current_price?.usd}</p>
                    </div>
                    <div className='flex justify-between w-full border-b py-2'>
                        <h3 className='text-[#535bf2]'>market cap</h3>
                        <p>${DataId?.market_data?.market_cap?.usd}</p>
                    </div>
                    <div className='hide flex justify-between w-full border-b py-2'>
                        <h3 className='text-[#535bf2]'>high</h3>
                        <p>${DataId?.market_data?.high_24h?.usd}</p>
                    </div>
                    <div className="low flex justify-between w-full border-b py-2">
                        <h3 className='text-[#535bf2]'>low</h3>
                        <p>${DataId?.market_data?.low_24h?.usd}</p>
                    </div>
                </div>
            </div> : <div className=' bg-opacity-60 backdrop-blur-sm fixed top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center'>
                <Loader />
            </div>}
        </>
    );
}

export default View;

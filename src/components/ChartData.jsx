import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { useParams } from 'react-router-dom';



const ChartData = () => {
    const [DataId, setDataId] = useState([])
    const { DetailsId } = useParams()

    const IdDataApi = () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-WAYm4nugi4QigyEyL7MDvwJ2' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${DetailsId}/market_chart?vs_currency=usd&days=100&interval=daily`, options)
            .then(response => response.json())
            .then(response => setDataId(response))
            .catch(err => console.error(err));
    }

    const [data, setdata] = useState([['Data', 'Prices']])

    useEffect(() => {
        IdDataApi()
        let DataCopy = [['Data', 'Prices']]
        if (DataId.prices) {
            DataId.prices.map((element) => {
                DataCopy.push([`${new Date(element[0]).toLocaleDateString().slice(0, -5)}`, element[1]])
            });
            setdata(DataCopy)
        }
    }, [DataId]);

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };


    return (
        <>
            <Chart
                chartType="LineChart"
                width="100%"
                height="250px"
                data={data}
                options={options}
            />
        </>
    );
}

export default ChartData;

import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Pagination from './Pagination';


function Main() {
    const [cryptoList, setCryptoList] = useState([]);
    const [listItems, setListItems] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [currentCryptos, setCurrentCryptos] = useState([]);

    const [totalCryptos, settotalCryptos] = useState([]);


    const paginate = (number) => setCurrentPage(number)



    let getCryptoList = async () => {
        try {
            const headers = {
                'Authorization': 'Bearer ',
                'My-Custom-Header': 'foobar'
            };
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d', { headers }).then((response) => {
                setCryptoList(response.data);
                console.log(response.data)

            }, (error) => {
                console.log(error);
            });
        }
        catch (error) {
            console.log('error')
        }
    }

   

    // const handleData = () => {

    // };



    useEffect(() => {
        getCryptoList()
        const indexOfLastCrypto = currentPage * listItems;
        const indexOfFirstCrypto = indexOfLastCrypto - listItems;
        setCurrentCryptos(cryptoList.slice(indexOfFirstCrypto, indexOfLastCrypto));
        settotalCryptos(cryptoList.length);  
    },[cryptoList, currentPage])



    return (
        <div id="wrapper">
            <div id="content-wrapper" className='d-flex flex-column'>

                <div id="content">

                    <h3>Top 100 Cryptocurrencies by Market Cap</h3>
                    <div className="container-fluid">
                        <div className="card shadow mb-4">

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className='table table-info'>
                                                <th className='text-white'> </th>
                                                <th className='text-white'>#</th>

                                                <th className='text-white' >
                                                    <span>

                                                    </span>
                                                    NAME</th>
                                                <th className='text-white'>PRICE</th>
                                                <th className='text-white'>24H <span> </span></th>
                                                <th className='text-white'>7D</th>
                                                <th className='text-white'>MARKET CAP</th>
                                                <th className='text-white'>VOLUME(24H)</th>
                                                <th className='text-white'>CIRCULATING SUPPLY</th>
                                                <th className='text-white'> </th>





                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentCryptos.map((row) => (

                                                <tr>
                                                    <td><i class="bi bi-star" /></td>
                                                    <td>{row.market_cap_rank}</td>
                                                    <td>
                                                        <span style={{ paddingRight: "9px" }}><img src={row.image} alt="crypto" height="25px" width="25px" /></span>

                                                       {row.name}
                                                        <span style={{ paddingLeft: "5px" }}>{row.symbol}</span>
                                                    </td>
                                                    <td>${row.current_price}</td>
                                                    <td><span></span>
                                                        0.65%
                                                    </td>
                                                    <td><span></span>
                                                        0.65%
                                                    </td>
                                                    <td>${row.market_cap}</td>
                                                    <td>${row.total_volume} </td>
                                                    <td>{row.circulating_supply} BTC
                                                    </td>
                                                    <td><i class="bi bi-three-dots-vertical"></i></td>

                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>



                                </div>
                            </div>
                        </div>
                        {cryptoList.length > listItems ?
                            <Pagination
                                listItems={listItems}
                                totalCryptos={totalCryptos}
                                paginate={paginate}
                            />
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
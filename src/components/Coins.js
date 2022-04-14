import React, { useEffect, useState } from "react";
import IcSearch from '../svg/search.svg'
// import axios from "axios";
import { Dummy } from './Dummy'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(3);
    const [totalPage, setTotalPages] = useState(coins.length > 0 ? Math.ceil(coins.length / limit) : 0)
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const dataCoins = coins.slice(startIndex, endIndex);

    const [search, setSearch] = useState('');

    // console.log('page', page)
    // console.log('limit', limit)
    // console.log('startIndex', startIndex)
    // console.log('endIndex', endIndex)
    // console.log('coins', coins)
    // console.log('dataCoins', dataCoins)

    // console.log('coins.length', coins.length)
    // console.log('totalPage', Math.ceil(coins.length / limit))
    // console.log('totalPage', totalPage)

    useEffect(() => {
        if (dataCoins.length > 0) {
            const totalPages = Math.ceil(coins.length / limit);
            setTotalPages(totalPages);
        }
    }, [dataCoins]) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if (coins.length === 0) {
            // return getData()
            return setCoins(Dummy)
        }
        return () => {
            setCoins([])
        };
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // kalau pakai getData kena Response has been truncated karena datanya terlalu banyak
    // const getData = () => {
    //     return axios.get("https://api.coinpaprika.com/v1/coins/")
    //         .then(res => {
    //             setCoins(res.data);
    //         })
    //         .catch(err => {
    //             console.log('err getData', err)
    //         })
    // }

    const backClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const pageClick = (page) => {
        setPage(page);
    }

    const nextClick = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }
    }

    const deleteClick = (id) => {
        const newCoins = coins.filter(coin => coin.id !== id);
        setCoins(newCoins);
    }

    const searchClick = (e) => {
        const newCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
        setCoins(newCoins);
    }

    return (
        <>
            <Navbar />
            <div className="body">
                <div className="title">
                    Coin List
                </div>
                <div className="card">
                    <div className="title">
                        Coin List
                    </div>
                    <div className="filter-container">
                        <div className="select">
                            <select>
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="search">
                            <img src={IcSearch} alt="search" className="icon" />
                            <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                        </div>
                        <div className="btn-search" onClick={searchClick}>
                            Search
                        </div>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead className="head">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Symbol</td>
                                    <td>Rank</td>
                                    <td>Type</td>
                                    <td>Active</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataCoins.map((item, index) => {
                                        return (
                                            <tr key={index} className="body">
                                                <td>
                                                    <Link to={`/${item.id}`} state={{ data: item }} className="btn">
                                                        {item.id}
                                                    </Link>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.symbol}</td>
                                                <td>{item.rank}</td>
                                                <td>{item.type}</td>
                                                <td>{item.is_active ? "True" : "False"}</td>
                                                <td className="action">
                                                    {/* <Link to={`/${item.id}`} state={{ data: item }} className="btn">
                                                        Delete
                                                    </Link> */}
                                                    <div onClick={() => deleteClick(item.id)} className="btn">
                                                        Delete
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="pagination">
                            <div className="item" onClick={backClick}>
                                &laquo;
                            </div>
                            {
                                Array.from({ length: totalPage }, (v, i) => i + 1).map((item, index) => {
                                    // console.log('item', item)
                                    return (
                                        <div key={index} className={`item ${page === item ? 'active' : ''}`} onClick={() => pageClick(item)}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="item">
                                1
                            </div>
                            <div className="item active">
                                2
                            </div> */}
                            <div className="item" onClick={nextClick}>
                                &raquo;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Coins
import React, { useState,useEffect } from 'react'
import Shop from './Shop'
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const Carts = () => {

    const [store, setStore] = useState({
        titalresults: 0,
        results: [        ],
    });


    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch data from backend on component mount
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/card'); // Replace with your backend API URL
                const fetchedData = response.data;

                // Transform backend data into the format expected by the frontend
                const formattedData = fetchedData.map((item) => ({
                    game: item.games, // Assuming backend uses "games" field
                    price: item.price,
                    qty: 0, // Default quantity
                }));

                setStore({
                    titalresults: formattedData.length,
                    results: formattedData,
                });

                setLoading(false);
            } catch (err) {
                console.error('Error fetching card data:', err);
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            }
        };

        fetchCards();
    }, []); // Empty dependency array ensures it runs once on mount

    const updateQty = (index, newQty) => {
        setStore((prevStore) => {
            const updatedResults = [...prevStore.results];
            updatedResults[index].qty = newQty;
            return { ...prevStore, results: updatedResults };
        });
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }


    return (
        <div>
            <h2 style={{marginTop:'1rem',color:'white',backgroundColor:'#1d006fcc'}}>GAMES STORE </h2>
            <div className='container'>
                <div className="row">
                    {store.results.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card" style={{ width: '100%' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Games:-{item.game}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Price:-{item.price}</h6>
                                    <p className="card-text">Qty:-{item.qty}</p>
                                    <Shop price={item.price} qty={item.qty} onUpdateQty={(newQty) => updateQty(index, newQty)} />

                                    <button className='btn btn-success my-2' ><Link
                                        to="/product"
                                        state={{ cardIndex: index }}
                                        className="btn btn-success my-2"
                                        style={{ textDecoration: 'none', color: 'black' }}>
                                        Order Now
                                    </Link></button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carts

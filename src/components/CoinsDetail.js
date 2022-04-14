import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CoinsDetail = () => {
    const location = useLocation();
    console.log('location', location)
    const { data } = location.state
    return (
        <>
            <Navbar />
            <div className="body">
                <div className="title">
                    Coin Detail
                </div>
                <div className="card">
                    <div className="title">
                        Coin Detail
                    </div>
                    <div className="detail-coin">
                        <div className="tag">
                            ID
                        </div>
                        <div className="data">{data.id}</div>
                    </div>
                    <div className="detail-coin">
                        <div className="tag">
                            Name
                        </div>
                        <div className="data">{data.name}</div>
                    </div>
                    <div className="detail-coin">
                        <div className="tag">
                            Symbol
                        </div>
                        <div className="data">{data.symbol}</div>
                    </div>
                    <div className="detail-coin">
                        <div className="tag">
                            Type
                        </div>
                        <div className="data">{data.type}</div>
                    </div>
                    <div className="detail-coin">
                        <div className="tag">
                            Active
                        </div>
                        <div className="data">{data.is_active ? "True" : "False"}</div>
                    </div>
                    <div className="detail-coin">
                        <div className="tag">
                            Is New ?
                        </div>
                        <div className="data">{data.is_new ? "True" : "False"}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CoinsDetail
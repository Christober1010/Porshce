import React from "react";
import logo from "../Assets/images-removebg-preview.png";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="bg-dark text-light nav">
            <div className="container d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <div className="nav-head">Porsche</div>
                    <div>
                        <img src={logo} height={"60px"} />
                    </div>
                </div>
                <div className="nav-items-wrapper">
                    {
                        location.pathname === '/' ?
                            <div className="nav-links text-info" onClick={() => navigate("/")}>
                                Home <i className="fa fa-home"></i>
                            </div> : <div className="nav-links" onClick={() => navigate("/")}>
                                Home <i className="fa fa-home"></i>
                            </div>
                    }

                    {
                        location.pathname === '/models'||'/Model911'? <div className="nav-links text-info" onClick={() => navigate('/models')}>
                            Models <i className="fa fa-heart"></i>
                        </div> : <div className="nav-links" onClick={() => navigate('/models')}>
                            Models <i className="fa fa-heart"></i>
                        </div>
                    }

                    <div className="nav-links">
                        Account <i className="fa fa-user"></i>
                    </div>
                    <div className="nav-links">
                        Contact <i className="fa fa-phone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

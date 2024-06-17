import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand text-warning" href="#">리액트 & 스프링부트</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mt-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/adduser" className="btn btn-outline-light mb-2">유저 추가</Link>
                        </li>
                    </ul>
                        {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">유저 추가</a>
                                <button className="btn btn-outline-light">유저 추가</button>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
                
            </nav>
        </div>
    );
}
export default Navbar;
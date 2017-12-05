import React from 'react';
import {
    Link
  } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Show Brainer</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/shows">Shows</Link>
                        </li>
                    </ul>
                    <div class="col-sm-3 col-md-3">
                        <form class="navbar-form" role="search">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" name="q" />
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="../navbar/">Default</a>
                        </li>
                        <li>
                            <a href="../navbar-static-top/">Static top</a>
                        </li>
                        <li className="active">
                            <a href="./">Fixed top
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
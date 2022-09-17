// import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    console.log('navbar-render');
    return (
    <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Total Counters
            <span className='badge bg-secondary'>{totalCounters}</span></a>
            </div>
    </nav>
    );
}
 
export default NavBar;
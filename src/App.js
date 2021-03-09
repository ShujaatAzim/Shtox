import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="">
      <div className="topheader">
        <header className="container">
          <nav className="navbar">
            <div className="navbar-brand">
                <span className="navbar-item">Shtox</span>
            </div>
            <div className="navbar-end">
                <a className="navbar-item" href="/" target="_blank" rel="noopener noreferrer">Shtox.com</a>
            </div>
          </nav>
        </header>
      </div>
      <section className="results--section">
        <div className="container">
            <h1>Shtox shows realtime price information about<br></br> BTC, ETH and LTC (will add more later).</h1>
        </div>
        <div className="results--section__inner">
            {/* <Today />
            <History /> */}
        </div>
      </section>
    </div>
  );
}

export default App;

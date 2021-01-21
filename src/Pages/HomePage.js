import React, { Component } from 'react';

import Navbar from '../components/Navbar';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="container home">
          <div className="home-content">
            <p>Wujudkan Indonesia Sehat, Aman, dan Produktif</p>
            <h1>INDONESIA TANGAP COVID-19</h1>
          </div>
          <div className="home-cards">
            <div className="card">
              {}
              <div className="card-header">Total Case</div>
            </div>
            <div className="card-list">
              <div className="card">
                {}
                <div className="card-header">Positif</div>
              </div>
              <div className="card">
                {}
                <div className="card-header">Recovered</div>
              </div>
              <div className="card">
                {}
                <div className="card-header">Death</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;

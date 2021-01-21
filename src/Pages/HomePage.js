import React, { Component } from 'react';

import covid19 from '../api/covid19';

import Navbar from '../components/Navbar';
import InfoCardList from '../components/InfoCardList';

class HomePage extends Component {
  state = {
    total: '',
    positive: '',
    recovered: '',
    death: '',
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const response = await covid19.get('');
    this.setState({
      total: response.data.jumlahKasus,
      positive: response.data.perawatan,
      recovered: response.data.sembuh,
      death: response.data.meninggal,
    });
  };

  render() {
    const data = [
      {
        id: 1,
        header: 'Total Case',
        total: this.state.total,
        color: 'card ',
      },
      {
        id: 2,
        header: 'Positive',
        total: this.state.positive,
        color: 'card brown',
      },
      {
        id: 3,
        header: 'Recovered',
        total: this.state.recovered,
        color: 'card green',
      },
      {
        id: 4,
        header: 'Death',
        total: this.state.death,
        color: 'card red',
      },
    ];
    return (
      <div>
        <Navbar />
        <section className="container home">
          <div className="home-content">
            <p>Wujudkan Indonesia Sehat, Aman, dan Produktif</p>
            <h1>INDONESIA TANGAP COVID-19</h1>
          </div>
          <InfoCardList data={data} />
        </section>
      </div>
    );
  }
}

export default HomePage;

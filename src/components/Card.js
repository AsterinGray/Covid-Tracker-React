import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>#{data.kodeProvi}</span>
        <span>{data.provinsi}</span>
      </div>
      <p>Kasus Meninggal: {data.kasusMeni}</p>
      <p>Kasus Positif: {data.kasusPosi}</p>
      <p>Kasus Sembuh: {data.kasusSemb}</p>
    </div>
  );
};

export default Card;

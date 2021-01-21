import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>#{data.kodeProvi}</span>
        <span>{data.provinsi}</span>
      </div>
      <p className="card-text">
        <span>Death</span>
        <span>{data.kasusMeni}</span>
      </p>
      <p className="card-text">
        <span>Positive</span>
        <span>{data.kasusPosi}</span>
      </p>
      <p className="card-text">
        <span>Recovered</span>
        <span>{data.kasusSemb}</span>
      </p>
    </div>
  );
};

export default Card;

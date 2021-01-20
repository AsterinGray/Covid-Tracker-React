import React from 'react';

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          <span># {data.kodeProvi}</span>
          <span>{data.provinsi}</span>
        </div>
        <p>Kasus Meninggal: {data.kasusMeni}</p>
        <p>Kasus Positif: {data.kasusPosi}</p>
        <p>Kasus Sembuh: {data.kasusSemb}</p>
      </div>
    </div>
  );
};

export default Card;

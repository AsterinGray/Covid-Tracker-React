import React from 'react';

const InfoCard = ({ header, total, color }) => {
  console.log(color);
  return (
    <div className={color}>
      <div className="card-header">{header}</div>
      <div className="card-highlight">{total}</div>
    </div>
  );
};

export default InfoCard;

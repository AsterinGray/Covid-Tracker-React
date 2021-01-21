import React from 'react';
import InfoCard from './InfoCard';

const InfoCardList = (props) => {
  const CardList = props.data.map((datum) => {
    return (
      <InfoCard
        key={datum.id}
        header={datum.header}
        total={datum.total}
        color={datum.color}
      />
    );
  });
  return <div className="home-cards">{CardList}</div>;
};

export default InfoCardList;

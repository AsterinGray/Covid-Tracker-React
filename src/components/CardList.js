import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const statistic = props.data.statistic;
  const keyword = props.data.keyword;

  const CardList = statistic.map((datum) => {
    if (datum.provinsi.toLowerCase().includes(keyword)) {
      return <Card key={datum.fid} data={datum} />;
    }
    return null;
  });

  return <div>{CardList}</div>;
};

export default CardList;

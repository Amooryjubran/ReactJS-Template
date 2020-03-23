import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import { InfoCosumer } from '../context';

class News extends Component {
  render() {
    return (
      <InfoCosumer>
        {data => {
          return data.news.map(item => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoCosumer>
    );
  }
}

export default News;
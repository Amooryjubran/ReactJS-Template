import React, { Component } from 'react';
import { InfoCosumer } from './context';
import ReviewCard from './ReviewCard';

class Reviews extends Component {
  render() {
    return (
      <InfoCosumer>
        {data => {
          return data.reviews.map(person => {
            return <ReviewCard key={person.id} person={person} />;
          });
        }}
      </InfoCosumer>
    );
  }
}

export default Reviews;
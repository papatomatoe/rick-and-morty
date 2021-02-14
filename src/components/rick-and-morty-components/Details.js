import React from 'react';

import Service from '../../service';

import ItemDetails from '../ItemDetails';
import Record from '../Record';

import { withDataDetails } from '../hocs';

const { getCharacter, getLocation } = new Service();

const CharacterDetails = ({ item }) => {
  return (
    <ItemDetails
      name={item.name}
      status={item.status}
      img={item.image}
    >
      <Record label={'species'} item={item} />
      <Record label={'gender'} item={item} />
      <Record label={'location'} item={item} />
      <Record label={'created'} item={item} />
    </ItemDetails>
  );
};

const LocationDetails = ({ item }) => {
  return (
    <ItemDetails
      name={item.name}
    >
      {/* <Record label={'species'} item={item} />
      <Record label={'gender'} item={item} />
      <Record label={'location'} item={item} />
      <Record label={'created'} item={item} /> */}
    </ItemDetails>
  );
};

const Character = withDataDetails(CharacterDetails, getCharacter, 'character');

const Location = withDataDetails(LocationDetails, getLocation, 'location');

export { Character, Location };


import moment from 'moment';

const characterAdapter = (data) => ({
  id: data.id,
  name: data.name,
  status: data.status,
  image: data.image,
  species: data.species,
  gender: data.gender,
  location: data.location.name,
  created: moment(new Date(data.created)).format('Do MMMM YYYY')
});

const locationAdapter = (data) => ({
  id: data.id,
  name: data.name,
  type: data.type,
  dimension: data.dimension,
  created: moment(new Date(data.created)).format('Do MMMM YYYY')
});

const episodeAdapter = (data) => ({
  id: data.id,
  name: data.name,
  airDate: data.air_date,
  episodeCode: data.episode,
  characters: data.characters
})

export {
  characterAdapter,
  locationAdapter,
  episodeAdapter
};

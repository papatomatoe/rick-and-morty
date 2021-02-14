import moment from 'moment';

const characterAdapter = (data) => ({
  name: data.name,
  status: data.status,
  image: data.image,
  species: data.species,
  gender: data.gender,
  location: data.location.name,
  created: moment(new Date(data.created)).format('Do MMMM YYYY')
});

const locationAdapter = (data) => {
  return data;
}

export { characterAdapter, locationAdapter };

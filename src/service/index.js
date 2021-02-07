class Service {
  URL = 'https://rickandmortyapi.com/api';

  getData = async (endpoint) => {
    try {
      const response = await fetch(`${this.URL}${endpoint}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  getCharacterList = async (pageNumber) => {
    try {
      return await this.getData(`/character?page=${pageNumber}`);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Service;

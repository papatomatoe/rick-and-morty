import ItemSelector from '../ItemSelector';

import Service from '../../service';

import { withDataSelector } from '../hocs';

const { getCharacterList, getLocationList, getEpisodeList } = new Service();

const CharacterSelector = withDataSelector(ItemSelector, getCharacterList);
const LocationSelector = withDataSelector(ItemSelector, getLocationList);
const EpisodeSelector = withDataSelector(ItemSelector, getEpisodeList);

export {
  CharacterSelector,
  LocationSelector,
  EpisodeSelector
};

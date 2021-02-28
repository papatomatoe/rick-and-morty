import ItemSelector from '../ItemSelector';

import Service from '../../service';

import { withDataSelector, withErrorBoundary } from '../hocs';

const { getCharacterList, getLocationList, getEpisodeList } = new Service();

const CharacterSelector = withErrorBoundary(withDataSelector(ItemSelector, getCharacterList));
const LocationSelector = withErrorBoundary(withDataSelector(ItemSelector, getLocationList));
const EpisodeSelector = withErrorBoundary(withDataSelector(ItemSelector, getEpisodeList));

export {
  CharacterSelector,
  LocationSelector,
  EpisodeSelector
};

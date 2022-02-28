import { createAsyncThunk } from '@reduxjs/toolkit';
import PlacesApi from '../../api/Places';
import PlacesActionType from './ActionType';

const placesApi = new PlacesApi();

const getPlaces = createAsyncThunk(PlacesActionType.GetAll, () => {
  return placesApi.getAll();
});

export default getPlaces;
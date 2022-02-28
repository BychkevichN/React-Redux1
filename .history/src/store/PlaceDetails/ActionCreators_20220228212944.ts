import { createAsyncThunk } from '@reduxjs/toolkit';
import PlacesApi from '../../api/Places';
import IPlaceDetailsActionType from './ActionType';

const placesApi = new PlacesApi();

export const getPlaceDetails = createAsyncThunk(IPlaceDetailsActionType.getPlaceDetails, (id: string) => {
  return placesApi.getById(id);
})
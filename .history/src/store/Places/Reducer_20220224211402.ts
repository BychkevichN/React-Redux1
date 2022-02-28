import { createReducer } from '@reduxjs/toolkit';
import { getPlaces } from './ActionCreators';


import IPlacesState from './Type';

const initialState: IPlacesState = {
  places: undefined,
}

const placesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getPlaces.fulfilled, (state, action) => {
    state.places = action.payload;
  })
});

export default placesReducer;
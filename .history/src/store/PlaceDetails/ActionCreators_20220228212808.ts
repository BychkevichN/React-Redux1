import { createAsyncThunk } from '@reduxjs/toolkit';
import IPlaceDetailsActionType from './ActionType';

export const getPlaceDetails = createAsyncThunk(IPlaceDetailsActionType.getPlaceDetails, (id: string) => {

})
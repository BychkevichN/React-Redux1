import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaceDetails } from '../../store/PlaceDetails/ActionCreators';

const PlaceDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(getPlaceDetails(id!))

  }, [])

  return (
    <div>
      asd
    </div>
  );
};

export default PlaceDetails;
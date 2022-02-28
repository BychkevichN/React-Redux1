import { FC, useEffect } from 'react';
import { useDispatch, useSelector, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaceDetails } from '../../store/PlaceDetails/ActionCreators';

const PlaceDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const placeDetails = useSelector((state: RootState));

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
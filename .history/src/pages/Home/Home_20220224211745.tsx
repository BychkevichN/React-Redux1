import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getPlaces } from '../../store/Places/ActionCreators';

const Home: FC = () => {
  const dispatch = useDispatch();
  const {places} = useSelector((state: RootState) => state.places)

  useEffect(() => {
    dispatch(getPlaces());
  }, [])
  return (
    <div>
      Hello World
    </div>
  )
}

export default Home;
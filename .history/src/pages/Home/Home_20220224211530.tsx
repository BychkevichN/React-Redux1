import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPlaces } from '../../store/Places/ActionCreators';

const Home: FC = () => {
  const dispatch = useDispatch();

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
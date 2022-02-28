import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';

const  App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/places/:id" element= {<PlaceDetails />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const  App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/places/:id" element= {<PlaceDetails />} />
    </Routes>
  );
}

export default App;

import './App.css';
import CityDropDown from './components/CityDropDown';
import Weather from './components/Weather';
import { useState } from 'react';

const App = function App() {
  const [selectedCity, setSelectedCity] = useState("Ankara");

  return (
    <div className="App">
      <CityDropDown selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Weather selectedCity={selectedCity}/>
    </div>
  );
};

export default App;
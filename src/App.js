// import Header from './components/Header.jsx'
// import Filtering from './components/Filtering.jsx'
// import Card from './components/Card.jsx'
// import CountryData from './components/CountryData.jsx'
import Home from "./components/Home.jsx";
import CountryPage from "./components/CountryPage.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { getFullName } from "./api/countries_data.js";
function App() {
  // getCountriesData();
  // const country = async () => {
  //   const name = await getFullName("AFG");
  //   console.log(name);
  // }
  // country();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-info/:country" element={<CountryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

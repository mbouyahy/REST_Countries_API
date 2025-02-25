import { IoSearchOutline } from "react-icons/io5";

import "../App.css";

function Filtering({ regions , setFilter, setCountryName }) {
  return (
    <div className="Filtering-container">
      <div className="Filtering-search">
        <IoSearchOutline />
        <input type="search" placeholder="Search..." className="search" onChange={(e) => setCountryName(e.target.value)} />
      </div>

      <div className="Filtering-select">
        <select name="regions" id="" className="Filtering-select-tag" onChange={(e) => setFilter(e.target.value)}>
          <option value="none" disabled selected>
            Filter by Region
          </option>
          {regions.map((region) => (
            <option value={region} key={region}>{region}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filtering;

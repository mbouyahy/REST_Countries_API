import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Card({ countries }) {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    if (country) {
        console.log({country})
      navigate(`/country-info/${country}`);
    }
  }, [country, navigate]);

  const seeMore = () => {
    setVisibleCount((prev) => prev + 10);
  };
  return (
    <div className="cards-container">
      <div className="cards">
        {countries.slice(0, visibleCount).map((country) => (
          <button
            key={country.cca3} // Using unique country code instead of `name`
            className="card"
            onClick={() => setCountry(country.cca3)}
          >
            <div className="card-image">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="card-img"
              />
            </div>
            <div className="card-info">
              <p className="card-info-name">{country.name.common}</p>
              <p className="card-info-population">
                Population: {country.population.toLocaleString()}
              </p>
              <p className="card-info-region">Region: {country.region}</p>
              <p className="card-info-capital">
                Capital: {country.capital ? country.capital[0] : "N/A"}
              </p>
            </div>
          </button>
        ))}
      </div>
      {visibleCount >= countries.length ? null : (
        <button type="button" className="cards-seeMore-btn" onClick={seeMore}>
          See More
        </button>
      )}
    </div>
  );
}

export default Card;

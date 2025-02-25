import { IoIosArrowRoundBack } from "react-icons/io";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import countriesCodes from "../assets/countriesCodes.json";

function CountryData({ countryInfo }) {
  const navigate = useNavigate();
  const [country, setCountry] = useState(countryInfo ? countryInfo[0] : null);

  useEffect(() => {
    if (countryInfo && countryInfo.length > 0) {
      setCountry(countryInfo[0]);
    }
  }, [countryInfo]);

  useEffect(() => {
    navigate(`/country-info/${country}`);
  }, [country, navigate]);

  const NavigateToHome = () => {
    navigate("/");
  };

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CountryData-container">
      <button className="CountryData-backBtn" onClick={NavigateToHome}>
        <IoIosArrowRoundBack className="CountryData-backSymbol" />
        Back
      </button>
      <div className="CountryData-card">
        <div className="CountryData-flag">
          <img
            src={country.flags?.png}
            alt={country.name?.common}
            className="CountryData-flag-img"
          />
        </div>
        <div className="CountryData-info">
          <p className="CountryData-info-name">{country.name?.common}</p>
          <div className="CountryData-info-details">
            <div className="CountryData-info-general">
              <p className="CountryData-info-population">
                <strong>Population :</strong> {country.population}
              </p>
              <p className="CountryData-info-region">
                <strong>Region :</strong> {country.region}
              </p>
              <p className="CountryData-info-capital">
                <strong>Capital :</strong> {country.capital}
              </p>
              <p className="CountryData-info-subRegion">
                <strong>Sub Region :</strong> {country.subregion}
              </p>
            </div>

            <div className="CountryData-info-more">
              <p className="CountryData-info-languages">
                <strong>Languages :</strong>{" "}
                {country.languages
                  ? country.languages[Object.keys(country.languages)[0]]
                  : "N/A"}
              </p>
              <p className="CountryData-info-currencies">
                <strong>Currencies :</strong>{" "}
                {country.currencies
                  ? country.currencies[Object.keys(country.currencies)[0]].name
                  : "N/A"}
              </p>
              <p className="CountryData-level-domain">
                <strong>Top level domain : </strong> {country.tld?.[0] || "N/A"}
              </p>
            </div>
          </div>
          <div className="CountryData-info-borders">
            <strong className="CountryData-info-borders-title">
              Border Countries : 
            </strong>

            <div className="CountryData-info-borders-countries">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border) => {
                  if (countriesCodes[border] && countriesCodes[border].length > 0) {
                    return (
                      <button
                        key={border}
                        className="CountryData-info-borders-country"
                        onClick={() => setCountry(border)}
                      >
                        {countriesCodes[border]}
                      </button>
                    );
                  }
                  return null;
                })
              ) : (
                <p> No border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryData;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Filtering from "./Filtering";
import Card from "./Card";
import countries from "../assets/countries.json";

const Home = () => {
  const [regions, setRegions] = useState([]);
  const [filter, setFilter] = useState("none");
  const [alLcountries, setAllCountries] = useState(countries);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    const uniqueRegions = [
      ...new Set(countries.map((country) => country.region)),
    ];
    setRegions(uniqueRegions);
  }, []);

  useEffect(() => {
    console.log({ filter });
    if (filter !== "none") {
      const filteredCountries = countries.filter(
        (country) => country.region === filter
      );
      setAllCountries(filteredCountries);
    } else {
      setAllCountries(countries);
    }
  }, [filter]);

  useEffect(() => {
    if (countryName) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(countryName.toLowerCase())
      );
      setAllCountries(filteredCountries);
    } else {
      setAllCountries(countries);
    }
  }, [countryName]);
  return (
    <>
      <Header />
      <Filtering
        regions={regions}
        setFilter={setFilter}
        setCountryName={setCountryName}
      />
      <Card countries={alLcountries} />
    </>
  );
};

export default Home;

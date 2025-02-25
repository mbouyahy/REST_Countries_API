import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import CountryData from "./CountryData";
import { getCountryData } from "../api/countries_data";

const CountryPage = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const { country } = useParams();

  useEffect(() => {
    if (!country) return;
    const getSpecialCountryData = async () => {
      const data = await getCountryData(country);
      if (!data) return;
      setCountryInfo(data);
    };
    getSpecialCountryData();
  }, [country]);

  return (
    <>
      <Header />
      <CountryData countryInfo={countryInfo} />
    </>
  );
};

export default CountryPage;

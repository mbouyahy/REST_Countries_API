import axios from "axios";

export const getCountryData = async (country) => {
  try {
    if (country.length > 0) {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${country}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getAllCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getFullName = async (country) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${country}`
    );
    return response.data[0].name.common;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// export const getCountrriesNamesByID = (countries) => {
//     if (countries){
//         return  countries.map((country) => ({
//             id: country.cca3,
//             name: country.name.common,
//         }));
//     }

//     return null;
// };

import countries from "./countries+states+cities.json";

export const getCountries = () => {
  return countries;
};

export const getStates = (country_id) => {
  let states = [];

  const country = countries.find(({ id }) => id === country_id);
  if (country) {
    states = country.states;
  }
  return states;
};

export const getCities = (country_id, state_id) => {
  let cities = [];

  const country = countries.find(({ id }) => id === country_id);
  if (country) {
    const state = country.states.find(({ id }) => id === state_id);
    if (state) {
      cities = state.cities;
    }
  }
  return cities;
};

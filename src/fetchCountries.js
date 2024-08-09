import Notiflix from 'notiflix';

const COUNTRIES_API_URL = `https://restcountries.com/v3.1/name/`;

const fetchCountries = async name => {
  try {
    const response = await fetch(
        COUNTRIES_API_URL +
          name +
          '?fields=name,capital,population,flags,languages'
    );

    if (!response.ok) {
      // Rzucamy błąd, jeśli odpowiedź nie jest poprawna
      throw new Error(response.status);
    }

    let json = await response.json();
    return json;
    
  } catch (error) {
    // Obsługa błędu - wyświetlenie komunikatu Notiflix
    Notiflix.Notify.failure("Oops, there is no country with that name");
    // Rzucenie błędu dalej, jeśli konieczne
    throw error;
  }
};

export { fetchCountries };

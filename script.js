//TODO: 
//Dark mode toggle
//Search
//Filter
//Modal
//API call
const countriesEl = document.getElementById('countries');

getCountries();

async function getCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/region/europe')
    const countries = await res.json();
    displayCountries(countries);
}
function displayCountries(countries) {
    countriesEl.innerHTML = '';

    countries.forEach(country => {
        const countryEl = document.createElement('div');
        countryEl.classList.add('card');
        countryEl.innerHTML = `
    <div> 
        <img class="card__image" src="${country.flag}" alt="The flag of Germany">
    </div>
        <div class="country-box">
            <h3>${country.name}</h3>
            <p id="label"><strong>Population: </strong>${country.population}</p>
            <p id="label"><strong>Region: </strong>${country.subregion}</p>
            <p id="label"><strong>Capital: </strong>${country.capital}</p>
        </div>`
        countriesEl.appendChild(countryEl);
    });

}
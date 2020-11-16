//TODO: 
//Dark mode toggle
//Search
//Filter
//Modal
//API call
const countriesEl = document.getElementById('countries');

getCountries();

async function getCountries(){
    const res = await fetch('https://restcountries.eu/rest/v2/region/europe')
    const countries = await res.json();
    displayCountries(countries);
}
function displayCountries(countries){
    countries.forEach(country => {
    const countryEl = document.createElement('div');
    countryEl.classList.add('card');
    countryEl.innerHTML = `
    
                <img class="card__image" src="https://restcountries.eu/data/deu.svg" alt="The flag of Germany">
                <div class="country-box">
                    <h3>Germany</h3>
                    <p id="label"><strong>Population: </strong>81770900</p>
                    <p id="label"><strong>Region: </strong>Western Europe</p>
                    <p id="label"><strong>Capital: </strong>Berlin</p>
                </div>`
    countriesEl.appendChild(countryEl);
});

}
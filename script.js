//TODO: 
//Dark mode toggle *completed, but after a testing, I decided that for this site it will not be okay, the map looks bad with a dark background
//Search*completed*
//Filter*completed*
//Modal
//API call *completed*
const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');
const filterBtn = document.getElementById('filter');
const regionFilters = filterBtn.querySelectorAll('li');
const searchEl = document.getElementById('search');
const modal = document.getElementById('modal');


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
            <h3 class="country-name">${country.name}</h3>
            <p id="label"><strong>Population: </strong>${country.population}</p>
            <p id ="label" class="country-region">
            <strong>Region:</strong>
            ${country.subregion}
        </p>
            <p id="label"><strong>Capital: </strong>${country.capital}</p>
        </div>`;

        countriesEl.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
        countriesEl.appendChild(countryEl);
    });
}
//toogle theme - currently not working
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
//show/hide filters 
filterBtn.addEventListener('click', () => {
    filterBtn.classList.toggle('open');
});
//search countries
searchEl.addEventListener('input', (e) => {
    const { value } = e.target;
    const countryName = document.querySelectorAll('.country-name');

    countryName.forEach(name => {
        if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
            name.parentElement.parentElement.style.display = 'block';
        } else {
            name.parentElement.parentElement.style.display = 'none';
        }
    });
});
//filtering countries by region
regionFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const value = filter.innerText;
        const countryRegion = document.querySelectorAll('.country-region');

        countryRegion.forEach(region => {
            if (region.innerText.includes(value) || value === 'All') {
                // .card -> .card-body -> .country-region
                region.parentElement.parentElement.style.display = 'block';
            } else {
                region.parentElement.parentElement.style.display = 'none';
            }
        });
    });
});

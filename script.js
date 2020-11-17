//TODO: 
//Dark mode toggle *completed, but after a testing, I decided that for this site it will not be okay, the map looks bad with a dark background
//Search
//Filter
//Modal
//API call *completed*
const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');
const filterBtn = document.getElementById('filter');
const searchEl = document.getElementById('search');

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
            <p id="label"><strong>Region: </strong>${country.subregion}</p>
            <p id="label"><strong>Capital: </strong>${country.capital}</p>
        </div>`
        countriesEl.appendChild(countryEl);
    });
}
toggleBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
});
filterBtn.addEventListener('click', ()=>{
    filterBtn.classList.toggle('open');
});
searchEl.addEventListener('input', (e) => { 
    const { value } = e.target;
    const countryName = document.querySelectorAll('.country-name');

    countryName.forEach(name => {
        console.log(name.innerText);
        if(name.innerText.toLowerCase().includes(value.toLowerCase())){
            name.parentElement.parentElement.style.display = 'block';
        } else {
            name.parentElement.parentElement.style.display = 'none';
        }
    });
});
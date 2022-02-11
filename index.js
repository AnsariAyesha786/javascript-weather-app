const inputText = document.querySelector('.inputText');
const showData = document.querySelector('.showData');
var button = document.querySelector('.btn');

const API_key = "b4884fc1d298de0d2c0f6508eabed3b4";
button.addEventListener('click', () => {
    const inputCity = inputText.value;
    //console.log(inputCity);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=524901&appid=${API_key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            inputText.value = "";
            showData.innerHTML = `
                               <ul>
                               <li class="disc">${data.weather[0].description}</li>
                               <li class="city">${data.name}</li>
                               <li class="temp">${data.main.temp}°C</li>
                               </ul>
                               `;
        })
})
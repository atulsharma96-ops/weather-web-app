//https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=18416befc0276c5cab505e2dd1489b97

let text = document.getElementById("text");

let city = document.getElementById("city");

let temp = document.getElementById("temp");
// console.log(temp.innerHTML);

let humidity = document.getElementById("humidity");
// console.log(humidity.innerHTML)

let windspeed = document.getElementById("windspeed");
// console.log(windspeed.innerHTML);

async function search() {
    // alert("dfghjk");
    if (text.value == "") {
        alert("Enter city name");
        return;
    }
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=18416befc0276c5cab505e2dd1489b97&units=metric`;
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);
        city.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity;
        temp.innerHTML = data.main.temp;
        windspeed.innerHTML = data.wind.speed;
    }
    catch {
        alert("Something went wrong");
    }

}
function weather() {
    var typed = document.getElementById("textBox").value;
    // var typed = 'London'

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${typed}&appid=e16e39530d6558d58ab81f952f9b01f0`;


    fetch(url)
        .then(res => res.json())
        .then(data => process(data));
}

// weather();

function process(data) {
    // console.log (data);
    var infoBox = document.getElementById("weatherData");

    // for (var i=0; i<data.length; i++ ){
    // var date = data[i].Date;
    // var cases = data[i].Cases;
    //console.log (date, cases);
    let name = data['name'];
    let weather = data['weather'][0]['main']
    let iconId = data['weather'][0]['icon']
    console.log(name, weather)
    var newDiv = document.createElement("div");
    newDiv.classList.add("styles");
    // newDiv.innerHTML = `<p> Name: ${name}</p>
    //                     <p> Weather: ${weather} </p>
    //                     <img src="https://openweathermap.org/img/wn/${iconId}@2x.png">`;
    newDiv.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://openweathermap.org/img/wn/${iconId}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Weather: ${data['weather'][0]['main']}, ${data['weather'][0]['description']}</li>
            <li class="list-group-item">Longitude: ${data['coord']['lon']}</li>
            <li class="list-group-item">Latitude: ${data['coord']['lat']}</li>
            <li class="list-group-item">Temperature: ${data['main']['temp']} Fahrenheit</li>
            <li class="list-group-item">Pressure: ${data['main']['pressure']} Fahrenheit</li>
            <li class="list-group-item">Humidity: ${data['main']['humidity']} Fahrenheit</li>
            <li class="list-group-item">Wind Speed: ${data['wind']['speed']} Fahrenheit</li>
        </ul>
    </div>`;

    infoBox.appendChild(newDiv);

    // }


}


// Button Click on Enter press
$("#textBox").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});

$("#button").click(function() {
    weather();
});
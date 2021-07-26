let weather = [
  "paris"| {
    temp: 19.7,
    humidity: 80
  },
  "tokyo"| {
    temp: 17.3,
    humidity: 50
  },
  "lisbon"| {
    temp: 30.2,
    humidity: 20
  },
  "san francisco"| {
    temp: 20.9,
    humidity: 100
  },
  "moscow"| {
    temp: -5,
    humidity: 20
  }
];

let city = prompt("Which City Are You Looking For?")
function cityWeather(){ weather.find weather[] => city.toLowerCase().trim()}

if (cityWeather===true) {
  alert(`The temperture is ${weather.temp[]} and the humidity ${weather.humidity[]}`)
} else {
  alert (`Sorry, we don't have that information at the moment`)
}
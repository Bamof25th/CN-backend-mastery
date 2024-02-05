// Complete the function calculateAverage
const weather = [
    { city: "New York", temperature: 50, pressure: 1015 },
    { city: "Los Angeles", temperature: 70, pressure: 1010 },
    { city: "Chicago", temperature: 40, pressure: 1012 },
    { city: "Houston", temperature: 75, pressure: 1020 },
    { city: "Miami", temperature: 80, pressure: 1017 }
  ];
  const pressureThreshold = 115;
  function calculateAverage( pressureThreshold){
    //Implement your function here
      const tempSum= weather.filter(city=> city.pressure>=pressureThreshold).map(data=> data.temperature).reduce((temp, c)=> temp+c, 0);
      
      
      const cityCount= weather.filter(el=> el.pressure>= pressureThreshold).length
      
      const avg= tempSum/ cityCount
      console.log(
      `The average temperature of the cities with a pressure value above ${pressureThreshold} is ${avg.toFixed(
        1
      )}.`)
      return avg.toFixed(1)
      
  }
  console.log(calculateAverage(pressureThreshold))
  //Output : 68.3